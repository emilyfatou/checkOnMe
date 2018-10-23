package com.romha.checkonme.backend;

import android.util.Log;

import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.model.User;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by admin on 3/8/17.
 */

public class Api {

    /* List of API Endpoints */
    private static final String BASE_URL = "http://com.api.etb.gebeya.io/"; //"http://130.211.250.101:8001/";
    private static final String LOGIN_URL = BASE_URL +  "users/login";
    private static final String SIGN_UP_URL = BASE_URL +  "users/signup";
    private static final String CHANGE_PASSWORD_URL = BASE_URL + "users/updatePass/";
    private static final String SEND_MESSAGE_URL = BASE_URL + "messages/send";
    private static final String PROFILE_URL = BASE_URL + "profiles/";
    private static final String FORGOT_PASSWORD_URL = BASE_URL + "users/forgotPassword";

    public static boolean login(String email, String password) {
        /* Create Json Object */
        JSONObject b = new JSONObject();
        try {
            b.put("email", email);
            b.put("password", password);
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        /* Call Loader and make http request */
        Loader loader = new Loader(LOGIN_URL)
                .setHttpMethod(Loader.POST);

        boolean res = loader.loadJSON(b.toString());

        if (!res) return res;

        /* Get the Response and Process it */
        String result = loader.response;
        d("login: Result: " + result);

        /* Create the user table in the database */
        UserController controller = new UserController(User.TABLE);

        try {
            /* Add the user to the database */
            User u = new User();

            JSONObject o = new JSONObject(result);
            u.token = o.getString("token");

            /* Set the token in the Loader class for later requests to the API */
            loader.setToken(u.token);

            JSONObject user = o.getJSONObject("user");
            u._id = user.getString("_id");
//            u.email = user.getString("email");

            JSONObject profile = user.getJSONObject("profile");
            u.profile_id = profile.getString("_id");
            u.firstName = profile.getString("first_name");
            u.lastName = profile.getString("last_name");
            u.phone = profile.getString("phone_number");
            u.email = profile.getString("email");
            u.country = profile.getString("country");
            u.state = profile.getString("state");
            u.city = profile.getString("city");

            JSONObject contacts = profile.getJSONObject("emergency_contacts");
            u.contact1Name = contacts.getString("contact_name1");
            u.contact2Name = contacts.getString("contact_name2");
            u.contact1Phone = contacts.getString("phone_number1");
            u.contact2Phone = contacts.getString("phone_number2");
            u.contact1Relation = contacts.getString("relationship1");
            u.contact2Relation = contacts.getString("relationship2");

            controller.save(u);

            controller.load(); // loads the user info from the database to the static 'user' field inside the UserController class.

            return true;

        } catch (JSONException e) {
            e.printStackTrace();
            e(e.getMessage());
            return false;
        }

    }

    public static boolean signUp(String firstName, String lastName, String phone, String email, String password) {
        /* Create Json Object */
        JSONObject b = new JSONObject();
        try {
            b.put("first_name", firstName);
            b.put("last_name", lastName);
            b.put("phone_number", phone);
            b.put("email", email);
            b.put("password", password);
            b.put("user_type", "customer");
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        /* Call Loader and make http request */
        Loader loader = new Loader(SIGN_UP_URL)
                .setHttpMethod(Loader.POST);

        boolean res = loader.loadJSON(b.toString());

        if (!res) return res;

        /* Get the Response and Process it */
        String result = loader.response;
        d("signUp: Result: " + result);

        return true;
    }

    public static boolean changePassword(String old_password, String new_password) {
        /* Create Json Object */
        JSONObject b = new JSONObject();
        try {
            b.put("password", old_password);
            b.put("new_password", new_password);
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        /* Call Loader and make http request */
        Loader loader = new Loader(CHANGE_PASSWORD_URL + UserController.user._id)
                .setHttpMethod(Loader.POST);

        boolean res = loader.loadJSON(b.toString());

        if (!res) return res;

        /* Get the Response and Process it */
        String result = loader.response;
        d("Change Password: Result: " + result);

        return true;
    }

    public static boolean sendMessage(String message, String recipient) {
        /* Create Json Object */
        JSONObject b = new JSONObject();
        try {
            b.put("from", UserController.user.phone);
            b.put("message", message);
            b.put("to", recipient);
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        /* Call Loader and make http request */
        Loader loader = new Loader(SEND_MESSAGE_URL)
                .setHttpMethod(Loader.POST);

        boolean res = loader.loadJSON(b.toString());

        if (!res) return res;

        /* Get the Response and Process it */
        String result = loader.response;
        d("Send Message: Result: " + result);

        return true;
    }

    public static boolean updateProfile(String firstName, String lastName, String phone, String email,
                                        String country, String state, String city) {
        /* Create Json Object */
        JSONObject b = new JSONObject();
        try {
            b.put("first_name", firstName);
            b.put("last_name", lastName);
            b.put("phone_number", phone);
            b.put("email", email);
            b.put("country", country);
            b.put("state", state);
            b.put("city", city);
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        /* Call Loader and make http request */
        Loader loader = new Loader(PROFILE_URL + UserController.user.profile_id)
                .setHttpMethod(Loader.PUT);

        boolean res = loader.loadJSON(b.toString());

        if (!res) return res;

        /* Get the Response and Process it */
        String result = loader.response;
        d("update Profile: Result: " + result);

        return true;
    }

    public static boolean updateContacts(String name1, String phone1, String relation1, String name2, String phone2, String relation2) {
        /* Create Json Object */
        JSONObject a = new JSONObject();

        /* Create Json Object */
        JSONObject b = new JSONObject();
        try {
            b.put("contact_name1", name1);
            b.put("contact_name2", name2);
            b.put("phone_number1", phone1);
            b.put("phone_number2", phone2);
            b.put("relationship1", relation1);
            b.put("relationship2", relation2);
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        /* Insert the second Json Object into the first Json Object */
        try {
            a.put("emergency_contacts", b);
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        /* Call Loader and make http request */
        Loader loader = new Loader(PROFILE_URL + UserController.user.profile_id)
                .setHttpMethod(Loader.PUT);

        boolean res = loader.loadJSON(a.toString());

        if (!res) return res;

        /* Get the Response and Process it */
        String result = loader.response;
        d("update Contacts: Result: " + result);

        return true;
    }

    public static boolean forgotPassword(String email) {
//        /* Create Json Object */
//        JSONObject b = new JSONObject();
//        try {
//            b.put("email", email);
//        }catch (JSONException e) {
//            e.printStackTrace();
//            return false;
//        }

        /* Call Loader and make http request */
        Loader loader = new Loader(FORGOT_PASSWORD_URL + email)
                .setHttpMethod(Loader.POST);

//        boolean res = loader.loadJSON(b.toString());
        boolean res = loader.loadJSON(null);

        if (!res) return res;

        /* Get the Response and Process it */
        String result = loader.response;
        d("Forgot Password: Result: " + result);

        return true;
    }

    public static boolean getProfile() {

        /* Call Loader and make http request */
        Loader loader = new Loader(PROFILE_URL + UserController.user.profile_id)
                .setHttpMethod(Loader.GET);

        boolean res = loader.loadJSON(null);

        if (!res) return res;

        /* Get the Response and Process it */
        String result = loader.response;
        d("Get Profile: Result: " + result);

        /* Save the user's profile in the database */
        UserController controller = new UserController(User.TABLE);

        try {
            User u = new User();

            JSONObject o = new JSONObject(result);
            u.profile_id = o.getString("_id");
            u.phone = o.getString("phone_number");
            u.email = o.getString("email");
            u.firstName = o.getString("first_name");
            u.lastName = o.getString("last_name");
            u.country = o.getString("country");
            u.state = o.getString("state");
            u.city = o.getString("city");

            JSONObject contacts = o.getJSONObject("emergency_contacts");
            u.contact1Name = contacts.getString("contact_name1");
            u.contact2Name = contacts.getString("contact_name2");
            u.contact1Phone = contacts.getString("phone_number1");
            u.contact2Phone = contacts.getString("phone_number2");
            u.contact1Relation = contacts.getString("relationship1");
            u.contact2Relation = contacts.getString("relationship2");

            controller.save(u);

            controller.load(); // loads the user info from the database to the static 'user' field inside the UserController class.

            return true;

        } catch (JSONException e) {
            e.printStackTrace();
            e(e.getMessage());
            return false;
        }

    }

    private static void d(String message) {
        Log.d("API", message);
    }

    private static void e(String message) {
        Log.e("API", message);
    }

}
