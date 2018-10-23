package com.romha.checkonme.model;

/**
 * Created by admin on 4/26/17.
 */

public class Rectangle {

    public double x;
    public double y;
    public double length;
    public double height;

    public Rectangle() {
        x = 0;
        y = 0;
        length = 0;
        height = 0;
    }

    public Rectangle(double x, double y, double length, double height) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.height = height;
    }

    public boolean isTouched(double x_dim, double y_dim) {

        if (x_dim >= x && x_dim <= x + length && y_dim >= y && y_dim <= y + height)
            return true;
        else
            return false;
    }
}
