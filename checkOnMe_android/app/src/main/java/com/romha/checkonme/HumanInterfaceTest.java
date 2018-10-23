package com.romha.checkonme;

import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AlertDialog;
import android.support.v7.widget.Toolbar;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewTreeObserver;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.model.Message;
import com.romha.checkonme.model.Rectangle;

import java.util.ArrayList;

/**
 * Created by admin on 3/8/17.
 */

public class HumanInterfaceTest extends BaseActivity {

    private EditText messageArea;
    private Button b;

    private ImageView head;
    private ImageView neck;
    private ImageView shoulders;
    private ImageView arms;
    private ImageView hands;
    private ImageView chest;
    private ImageView stomach;
    private ImageView legs;
    private ImageView feet;

    private int multiClick = 0;
    private String tempMessage;

    private TextView recipients;
    private ImageView addContacts;

    StringBuilder addedContacts = new StringBuilder();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.test_body_screen);

        Toolbar tlb = (Toolbar) findViewById(R.id.toolbar);
        tlb.setNavigationIcon(R.drawable.toolbar_back);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);

        tlb.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        recipients = (TextView) findViewById(R.id.text_recipients);
        addContacts = (ImageView) findViewById(R.id.add_contact);
        messageArea = (EditText) findViewById(R.id.message_area);
        b = (Button) findViewById(R.id.send_button);

        /* Display the message recipients */
        if (    UserController.user.contact1Phone != null && UserController.user.contact2Phone != null
                && !UserController.user.contact1Phone.matches("") && !UserController.user.contact2Phone.matches("") )
            recipients.append(UserController.user.contact1Phone + ", " + UserController.user.contact2Phone);

        if (getIntent().getIntExtra("calling-activity", 0) == ActivityConstants.ACTIVITY_HOME)
            recipients.append(", 911");

        addContacts.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final Dialog dialog = new Dialog(HumanInterfaceTest.this);
                dialog.setContentView(R.layout.add_contact_dialog);
                dialog.setCancelable(true);

                final EditText newContactNumber = (EditText) dialog.findViewById(R.id.new_contact_phone_no);

                Button button = (Button) dialog.findViewById(R.id.add_new_number);
                button.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        String newNumber = newContactNumber.getText().toString().trim();

                        if (!recipients.getText().toString().matches("To: "))
                            recipients.append(", " + newNumber);
                        else
                            recipients.append(newNumber);

                        dialog.cancel();

                        /* Add the new numbers to a string builder so that we can send out messages to them */
                        addedContacts.append(newNumber);
                        addedContacts.append("\\n");
                    }
                });

                dialog.show();
            }
        });

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String message = messageArea.getText().toString();
                if (message.isEmpty()) {
                    messageArea.setError("Type a text to send");
                } else {
                    Message m = new Message(HumanInterfaceTest.this, message);
                    int callingActivity = getIntent().getIntExtra("calling-activity", 0);

                    switch (callingActivity) {
                        case ActivityConstants.ACTIVITY_HOME:
                            /* Send the message to EMS and contacts */
                            m.setRecipient(Message.EMS);
                            break;
                        case ActivityConstants.ACTIVITY_MESSAGE:
                            /* Send the message to contacts */
                            m.setRecipient(Message.CONTACTS);
                            break;
                    }
                    m.startSendMessage(UserController.user.contact1Phone);
//                    m.startSendMessage(UserController.user.contact2Phone);

                    String[] lines = addedContacts.toString().split("\\n");
                    for(String s: lines){
                        m.startSendMessage(s);
                    }

                    m.saveMsgToDatabase();
//                    finish();
                    messageArea.setText("");
                }
            }
        });

        head = (ImageView) findViewById(R.id.head);
        neck = (ImageView) findViewById(R.id.neck);
        stomach = (ImageView) findViewById(R.id.stomach);
        chest = (ImageView) findViewById(R.id.chest);
        legs = (ImageView) findViewById(R.id.legs);
        feet = (ImageView) findViewById(R.id.feet);
        shoulders = (ImageView) findViewById(R.id.shoulders);
        arms = (ImageView) findViewById(R.id.arms);
        hands = (ImageView) findViewById(R.id.hands);

        View.OnClickListener listener = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int id = v.getId();

                switch (id) {
                    case R.id.head:
                        final String[] headProblem = new String[1];
                        AlertDialog.Builder builderHead = new AlertDialog.Builder(HumanInterfaceTest.this);
                        builderHead.setTitle("List of Possible Problems")
                                .setItems(R.array.head_problems, new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        String[] headProblems = getResources().getStringArray(R.array.head_problems);
                                        headProblem[0] = headProblems[which];

                                        tempMessage += "(" + headProblem[0] + ")";

                                        ++multiClick;
                                        messageArea.setText(tempMessage);
                                    }
                                });

                        if (multiClick > 0) {

                            if (!tempMessage.contains("head")) {
                                tempMessage += ", head";
                            } else {

                                if (multiClick > 1) {
                                    tempMessage = tempMessage.replace(", head", "");
//                                    String replacement = tempMessage.replace(", head", "");
                                    messageArea.setText(tempMessage);
                                    head.setImageResource(R.drawable.head_grey);
                                    --multiClick;
                                    break;
                                } else {
                                    tempMessage = "";
                                    messageArea.setText(tempMessage);
                                    head.setImageResource(R.drawable.head_grey);
                                    --multiClick;
                                    break;
                                }

                            }

                        } else {
                            tempMessage = "I have a problem with my head";
                        }

                        builderHead.create().show();

                        head.setImageResource(R.drawable.head_red);
                        break;

                    case R.id.neck:
                        final String[] neckProblem = new String[1];
                        AlertDialog.Builder builderNeck = new AlertDialog.Builder(HumanInterfaceTest.this);
                        builderNeck.setTitle("List of Possible Problems")
                                .setItems(R.array.neck_problems, new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        String[] neckProblems = getResources().getStringArray(R.array.neck_problems);
                                        neckProblem[0] = neckProblems[which];

                                        tempMessage += "(" + neckProblem[0] + ")";

                                        ++multiClick;
                                        messageArea.setText(tempMessage);
                                    }
                                });

                        if (multiClick > 0) {

                            if (!tempMessage.contains("neck")) {
                                tempMessage += ", neck";
                            } else {

                                if (multiClick > 1) {
//                                    String replacement = tempMessage.replace(", neck", "");
                                    tempMessage = tempMessage.replace(", neck", "");
                                    messageArea.setText(tempMessage);
                                    neck.setImageResource(R.drawable.neck_grey);
                                    --multiClick;
                                    break;
                                } else {
                                    tempMessage = "";
                                    messageArea.setText(tempMessage);
                                    neck.setImageResource(R.drawable.neck_grey);
                                    --multiClick;
                                    break;
                                }

                            }

                        } else {
                            tempMessage = "I have a problem with my neck";
                        }

                        builderNeck.create().show();

                        neck.setImageResource(R.drawable.neck_red);
                        break;

                    case R.id.chest:
                        final String[] chestProblem = new String[1];
                        AlertDialog.Builder builderChest = new AlertDialog.Builder(HumanInterfaceTest.this);
                        builderChest.setTitle("List of Possible Problems")
                                .setItems(R.array.chest_problems, new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        String[] chestProblems = getResources().getStringArray(R.array.chest_problems);
                                        chestProblem[0] = chestProblems[which];

                                        tempMessage += "(" + chestProblem[0] + ")";

                                        ++multiClick;
                                        messageArea.setText(tempMessage);
                                    }
                                });

                        if (multiClick > 0) {

                            if (!tempMessage.contains("chest")) {
                                tempMessage += ", chest";
                            } else {

                                if (multiClick > 1) {
//                                    String replacement = tempMessage.replace(", chest", "");
                                    tempMessage = tempMessage.replace(", chest", "");
                                    messageArea.setText(tempMessage);
                                    chest.setImageResource(R.drawable.chest_grey);
                                    --multiClick;
                                    break;
                                } else {
                                    tempMessage = "";
                                    messageArea.setText(tempMessage);
                                    chest.setImageResource(R.drawable.chest_grey);
                                    --multiClick;
                                    break;
                                }

                            }

                        } else {
                            tempMessage = "I have a problem with my chest";
                        }

                        builderChest.create().show();

                        chest.setImageResource(R.drawable.chest_red);
                        break;

                    case R.id.stomach:
                        final String[] stomachProblem = new String[1];
                        AlertDialog.Builder builderStomach = new AlertDialog.Builder(HumanInterfaceTest.this);
                        builderStomach.setTitle("List of Possible Problems")
                                .setItems(R.array.stomach_problems, new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        String[] stomachProblems = getResources().getStringArray(R.array.stomach_problems);
                                        stomachProblem[0] = stomachProblems[which];

                                        tempMessage += "(" + stomachProblem[0] + ")";

                                        ++multiClick;
                                        messageArea.setText(tempMessage);
                                    }
                                });

                        if (multiClick > 0) {

                            if (!tempMessage.contains("stomach")) {
                                tempMessage += ", stomach";
                            } else {

                                if (multiClick > 1) {
//                                    String replacement = tempMessage.replace(", stomach", "");
                                    tempMessage = tempMessage.replace(", stomach", "");
                                    messageArea.setText(tempMessage);
                                    stomach.setImageResource(R.drawable.stomach_grey);
                                    --multiClick;
                                    break;
                                } else {
                                    tempMessage = "";
                                    messageArea.setText(tempMessage);
                                    stomach.setImageResource(R.drawable.stomach_grey);
                                    --multiClick;
                                    break;
                                }

                            }

                        } else {
                            tempMessage = "I have a problem with my stomach";
                        }

                        builderStomach.create().show();

                        stomach.setImageResource(R.drawable.stomach_red);
                        break;

                    case R.id.shoulders:
                        final String[] shoulderProblem = new String[1];
                        AlertDialog.Builder builderShoulder = new AlertDialog.Builder(HumanInterfaceTest.this);
                        builderShoulder.setTitle("List of Possible Problems")
                                .setItems(R.array.shoulder_problems, new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        String[] shoulderProblems = getResources().getStringArray(R.array.shoulder_problems);
                                        shoulderProblem[0] = shoulderProblems[which];

                                        tempMessage += "(" + shoulderProblem[0] + ")";

                                        ++multiClick;
                                        messageArea.setText(tempMessage);
                                    }
                                });

                        if (multiClick > 0) {

                            if (!tempMessage.contains("shoulder")) {
                                tempMessage += ", shoulder";
                            } else {

                                if (multiClick > 1) {
//                                    String replacement = tempMessage.replace(", shoulder", "");
                                    tempMessage = tempMessage.replace(", shoulder", "");
                                    messageArea.setText(tempMessage);
                                    shoulders.setImageResource(R.drawable.shoulders_grey);
                                    --multiClick;
                                    break;
                                } else {
                                    tempMessage = "";
                                    messageArea.setText(tempMessage);
                                    shoulders.setImageResource(R.drawable.shoulders_grey);
                                    --multiClick;
                                    break;
                                }

                            }

                        } else {
                            tempMessage = "I have a problem with my shoulder";
                        }

                        builderShoulder.create().show();

                        shoulders.setImageResource(R.drawable.shoulders_red);
                        break;

                    case R.id.arms:
                        final String[] armProblem = new String[1];
                        AlertDialog.Builder builderArm = new AlertDialog.Builder(HumanInterfaceTest.this);
                        builderArm.setTitle("List of Possible Problems")
                                .setItems(R.array.arm_problems, new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        String[] armProblems = getResources().getStringArray(R.array.arm_problems);
                                        armProblem[0] = armProblems[which];

                                        tempMessage += "(" + armProblem[0] + ")";

                                        ++multiClick;
                                        messageArea.setText(tempMessage);
                                    }
                                });

                        if (multiClick > 0) {

                            if (!tempMessage.contains("arm")) {
                                tempMessage += ", arm";
                            } else {

                                if (multiClick > 1) {
//                                    String replacement = tempMessage.replace(", arm", "");
                                    tempMessage = tempMessage.replace(", arm", "");
                                    messageArea.setText(tempMessage);
                                    arms.setImageResource(R.drawable.arms_grey);
                                    --multiClick;
                                    break;
                                } else {
                                    tempMessage = "";
                                    messageArea.setText(tempMessage);
                                    arms.setImageResource(R.drawable.arms_grey);
                                    --multiClick;
                                    break;
                                }

                            }

                        } else {
                            tempMessage = "I have a problem with my arm";
                        }

                        builderArm.create().show();

                        arms.setImageResource(R.drawable.arms_red);
                        break;

                    case R.id.hands:
                        final String[] handProblem = new String[1];
                        AlertDialog.Builder builderHand = new AlertDialog.Builder(HumanInterfaceTest.this);
                        builderHand.setTitle("List of Possible Problems")
                                .setItems(R.array.hand_problems, new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        String[] handProblems = getResources().getStringArray(R.array.hand_problems);
                                        handProblem[0] = handProblems[which];

                                        tempMessage += "(" + handProblem[0] + ")";

                                        ++multiClick;
                                        messageArea.setText(tempMessage);
                                    }
                                });

                        if (multiClick > 0) {

                            if (!tempMessage.contains("hand")) {
                                tempMessage += ", hand";
                            } else {

                                if (multiClick > 1) {
//                                    String replacement = tempMessage.replace(", hand", "");
                                    tempMessage = tempMessage.replace(", hand", "");
                                    messageArea.setText(tempMessage);
                                    hands.setImageResource(R.drawable.hands_grey);
                                    --multiClick;
                                    break;
                                } else {
                                    tempMessage = "";
                                    messageArea.setText(tempMessage);
                                    hands.setImageResource(R.drawable.hands_grey);
                                    --multiClick;
                                    break;
                                }

                            }

                        } else {
                            tempMessage = "I have a problem with my hand";
                        }

                        builderHand.create().show();

                        hands.setImageResource(R.drawable.hands_red);
                        break;

                    case R.id.legs:
                        final String[] legProblem = new String[1];
                        AlertDialog.Builder builderLeg = new AlertDialog.Builder(HumanInterfaceTest.this);
                        builderLeg.setTitle("List of Possible Problems")
                                .setItems(R.array.leg_problems, new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        String[] legProblems = getResources().getStringArray(R.array.leg_problems);
                                        legProblem[0] = legProblems[which];

                                        tempMessage += "(" + legProblem[0] + ")";

                                        ++multiClick;
                                        messageArea.setText(tempMessage);
                                    }
                                });

                        if (multiClick > 0) {

                            if (!tempMessage.contains("leg")) {
                                tempMessage += ", leg";
                            } else {

                                if (multiClick > 1) {
//                                    String replacement = tempMessage.replace(", leg", "");
                                    tempMessage = tempMessage.replace(", leg", "");
                                    messageArea.setText(tempMessage);
                                    legs.setImageResource(R.drawable.legs_grey);
                                    --multiClick;
                                    break;
                                } else {
                                    tempMessage = "";
                                    messageArea.setText(tempMessage);
                                    legs.setImageResource(R.drawable.legs_grey);
                                    --multiClick;
                                    break;
                                }

                            }

                        } else {
                            tempMessage = "I have a problem with my leg";
                        }

                        builderLeg.create().show();

                        legs.setImageResource(R.drawable.legs_red);
                        break;

                    case R.id.feet:
                        final String[] footProblem = new String[1];
                        AlertDialog.Builder builderFoot = new AlertDialog.Builder(HumanInterfaceTest.this);
                        builderFoot.setTitle("List of Possible Problems")
                                .setItems(R.array.foot_problems, new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        String[] footProblems = getResources().getStringArray(R.array.foot_problems);
                                        footProblem[0] = footProblems[which];

                                        tempMessage += "(" + footProblem[0] + ")";

                                        ++multiClick;
                                        messageArea.setText(tempMessage);
                                    }
                                });

                        if (multiClick > 0) {

                            if (!tempMessage.contains("foot")) {
                                tempMessage += ", foot";
                            } else {

                                if (multiClick > 1) {
//                                    String replacement = tempMessage.replace(", foot", "");
                                    tempMessage = tempMessage.replace(", foot", "");
                                    messageArea.setText(tempMessage);
                                    feet.setImageResource(R.drawable.foot_grey);
                                    --multiClick;
                                    break;
                                } else {
                                    tempMessage = "";
                                    messageArea.setText(tempMessage);
                                    feet.setImageResource(R.drawable.foot_grey);
                                    --multiClick;
                                    break;
                                }

                            }

                        } else {
                            tempMessage = "I have a problem with my foot";
                        }

                        builderFoot.create().show();

                        feet.setImageResource(R.drawable.foot_red);
                        break;

                }

            }
        };

        head.setOnClickListener(listener);
        neck.setOnClickListener(listener);
        stomach.setOnClickListener(listener);
        chest.setOnClickListener(listener);
        legs.setOnClickListener(listener);
        feet.setOnClickListener(listener);
        shoulders.setOnClickListener(listener);
        arms.setOnClickListener(listener);
        hands.setOnClickListener(listener);

    }
}
