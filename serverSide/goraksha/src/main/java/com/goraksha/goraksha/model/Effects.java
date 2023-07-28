package com.goraksha.goraksha.model;

import jakarta.persistence.*;

@Entity
public class effects {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int disease_id;

    @Column
    private String Disease_name;

    @Column
    private String Symptoms;

    @Column
    private String medicine;

    @Column
    private String image;

    public int getDisease_id() {
        return disease_id;
    }

    public void setDisease_id(int disease_id) {
        this.disease_id = disease_id;
    }

    public String getDisease_name() {
        return Disease_name;
    }

    public void setDisease_name(String disease_name) {
        Disease_name = disease_name;
    }

    public String getSymptoms() {
        return Symptoms;
    }

    public void setSymptoms(String symptoms) {
        Symptoms = symptoms;
    }

    public String getMedicine() {
        return medicine;
    }

    public void setMedicine(String medicine) {
        this.medicine = medicine;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
