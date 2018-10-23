package com.romha.checkonme.backend;

import android.text.TextUtils;

import java.io.IOException;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Created by admin on 3/8/17.
 */

public class Loader {

    private OkHttpClient client;

    public String response;
    private int code;

    public String token;
    public String url;

    private String HTTP_METHOD;
    public static String POST = "post";
    public static String GET = "get";
    public static String PUT = "put";

    public Loader(String url) {
        this.url = url;
        client = new OkHttpClient();
    }

    public Loader setToken(String token) {
        this.token = token;
        return this;
    }

    public Loader setHttpMethod(String HTTP_METHOD) {
        this.HTTP_METHOD = HTTP_METHOD;
        return this;
    }

    /**
     * Check whether the request is successful
     * @return TRUE if code is between 200 & 300
     */
    public boolean isSuccessful() {
        return code >=200 && code < 300;
    }

    public boolean loadJSON(String jsonString) {

        Request.Builder builder = new Request.Builder();
            builder.url(url)
                    .addHeader("Content-Type", "application/json");

        /* Add token, if it is set */
        if (!TextUtils.isEmpty(token)) {
            builder.addHeader("Authorization", "Bearer " + token);
        }

        /* Check if it is POST / GET */
        if (HTTP_METHOD.equals(POST)) {
            /* Create MediaType and Request Body */
            MediaType mediaType = MediaType.parse("application/json");
            RequestBody requestBody = RequestBody.create(mediaType, jsonString);

            builder.post(requestBody);

        }else if (HTTP_METHOD.equals(GET)) {
            builder.get();

        }else if (HTTP_METHOD.equals(PUT)) {
            /* Create MediaType and Request Body */
            MediaType mediaType = MediaType.parse("application/json");
            RequestBody requestBody = RequestBody.create(mediaType, jsonString);

            builder.put(requestBody);
        }

        /* Create Request */
        Request request = builder.build();

        try {
            Response r = client.newCall(request).execute();

            response = r.body().string();
            code = r.code();

            return isSuccessful();

        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }

    }

}
