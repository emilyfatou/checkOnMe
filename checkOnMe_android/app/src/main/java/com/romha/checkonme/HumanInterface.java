package com.romha.checkonme;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.Toolbar;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewTreeObserver;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RelativeLayout;

import com.romha.checkonme.controllers.UserController;
import com.romha.checkonme.model.Message;
import com.romha.checkonme.model.Rectangle;

/**
 * Created by admin on 3/8/17.
 */

public class HumanInterface extends BaseActivity {

    private EditText messageArea;
    private Button b;

    Rectangle head;
    Rectangle neck;
    Rectangle leftShoulder;
    Rectangle leftArm;
    Rectangle leftHand;
    Rectangle rightShoulder;
    Rectangle rightArm;
    Rectangle rightHand;
    Rectangle chest;
    Rectangle stomach;
    Rectangle leftLeg;
    Rectangle rightLeg;
    Rectangle leftFoot;
    Rectangle rightFoot;

    private boolean multiClick;
    private String tempMessage;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.human_interface);

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

        messageArea = (EditText) findViewById(R.id.message_area);
        b = (Button) findViewById(R.id.send_button);

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String message = messageArea.getText().toString();
                if (message.isEmpty()) {
                    messageArea.setError("Type a text to send");
                } else {
                    /* Send the message */
                    Message m = new Message(HumanInterface.this, message)
                            .setRecipient(Message.EMS);

                    m.startSendMessage(UserController.user.contact1Phone);
                    m.startSendMessage(UserController.user.contact2Phone);
                }
            }
        });

        final RelativeLayout rl = (RelativeLayout) findViewById(R.id.relative_layout);

        rl.getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() {
            @Override
            public void onGlobalLayout() {
                //now we can retrieve the width and height
                int width = rl.getWidth();
                int height = rl.getHeight();

                //...
                //do whatever you want with them
                //...
                head = new Rectangle(.46111*width, .14558*height, .07604*width, .06282*height);
                neck = new Rectangle(.46528*width, .2084*height, .07188*width, .02816*height);
                leftShoulder = new Rectangle(.55451*width, .22357*height, .07639*width, .026*height);
                leftArm = new Rectangle(.6309*width, .2279*height, .16681*width, .0325*height);
                leftHand = new Rectangle(.79771*width, .2279*height, .0759*width, .03033*height);
                rightShoulder = new Rectangle(.36458*width, .22357*height, .08292*width, .02816*height);
                rightArm = new Rectangle(.20764*width, .2279*height, .15694*width, .0325*height);
                rightHand = new Rectangle(.1181*width, .2279*height, .08958*width, .03033*height);
                chest = new Rectangle(.41625*width, .23657*height, .16951*width, .065*height);
                stomach = new Rectangle(.43361*width, .3*height, .12785*width, .06512*height);
                leftLeg = new Rectangle(.50236*width, .36668*height, .08*width, .22322*height);
                rightLeg = new Rectangle(.41618*width, .36668*height, .08*width, .22322*height);
                leftFoot = new Rectangle(.52674*width, .5899*height, .06597*width, .0498*height);
                rightFoot = new Rectangle(.40583*width, .5899*height, .06597*width, .0498*height);

                //this is an important step not to keep receiving callbacks:
                //we should remove this listener
                //I use the function to remove it based on the api level!
                if(android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.JELLY_BEAN)
                    rl.getViewTreeObserver().removeOnGlobalLayoutListener(this);
                else
                    rl.getViewTreeObserver().removeGlobalOnLayoutListener(this);
            }
        });

        findViewById(R.id.human_image).setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                float x = event.getX();
                float y = event.getY();

//                showToast("You have touched the screen at coordinates x=" + x + " and y=" + y, HumanInterface.this);

                if (head.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", head";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my head";
                        messageArea.setText("I have a problem with my head");
                        multiClick = true;
                    }

//                    ImageView iv = new ImageView(HumanInterface.this);
//                    iv.setBackgroundColor(getResources().getColor(R.color.colorSecondBackground));
//
//                    RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(110, 145);
//                    params.leftMargin = 664;
//                    params.topMargin = 336;
//                    rl.addView(iv, params);
                }
                else if (neck.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", neck";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my neck";
                        messageArea.setText("I have a problem with my neck");
                        multiClick = true;
                    }
                }
                else if (leftShoulder.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", left shoulder";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my left shoulder";
                        messageArea.setText("I have a problem with my left shoulder");
                        multiClick = true;
                    }
                }
                else if (leftArm.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", left arm";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my left arm";
                        messageArea.setText("I have a problem with my left arm");
                        multiClick = true;
                    }
                }
                else if (leftHand.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", left hand";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my left hand";
                        messageArea.setText("I have a problem with my left hand");
                        multiClick = true;
                    }
                }
                else if (rightShoulder.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", right shoulder";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my right shoulder";
                        messageArea.setText("I have a problem with my right shoulder");
                        multiClick = true;
                    }
                }
                else if (rightArm.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", right arm";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my right arm";
                        messageArea.setText("I have a problem with my right arm");
                        multiClick = true;
                    }
                }
                else if (rightHand.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", right hand";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my right hand";
                        messageArea.setText("I have a problem with my right hand");
                        multiClick = true;
                    }
                }
                else if (chest.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", chest";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my chest";
                        messageArea.setText("I have a problem with my chest");
                        multiClick = true;
                    }
                }
                else if (stomach.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", stomach";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my stomach";
                        messageArea.setText("I have a problem with my stomach");
                        multiClick = true;
                    }
                }
                else if (leftLeg.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", left leg";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my left leg";
                        messageArea.setText("I have a problem with my left leg");
                        multiClick = true;
                    }
                }
                else if (rightLeg.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", right leg";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my right leg";
                        messageArea.setText("I have a problem with my right leg");
                        multiClick = true;
                    }
                }
                else if (leftFoot.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", left foot";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my left foot";
                        messageArea.setText("I have a problem with my left foot");
                        multiClick = true;
                    }
                }
                else if (rightFoot.isTouched(x, y)) {
                    if (multiClick) {
                        tempMessage += ", right foot";
                        messageArea.setText(tempMessage);
                    } else {
                        tempMessage = "I have a problem with my right foot";
                        messageArea.setText("I have a problem with my right foot");
                        multiClick = true;
                    }
                }

                return false;
            }
        });

    }
}
