package com.screen.fleet.screenfleet.model;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Module {
    private String type;
    private LinkedList<Module> childen;
    private Parameter parameter;

    public Module(){

    }


    public Module(String type, LinkedList<Module> childen, Parameter parameter) {
        this.type = type;
        this.childen = childen;
        this.parameter = parameter;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LinkedList<Module> getChilden() {
        return childen;
    }

    public void setChilden(LinkedList<Module> childen) {
        this.childen = childen;
    }

    public Parameter getParameter() {
        return parameter;
    }

    public void setParameter(Parameter parameter) {
        this.parameter = parameter;
    }

    @Override
    public String toString() {
        return "Module{" +
                "type='" + type + '\'' +
                ", childen=" + childen +
                ", parameter=" + parameter +
                '}';
    }

    private boolean typeIsValid() {
        List<String> elem = new ArrayList<>();
        elem.add("slide");
        elem.add("split");
        elem.add("picture");
        elem.add("video");
        elem.add("flux");

        for (String s: elem
             ) {
            if (this.type.toLowerCase().equals(s)){
                return true;
            }
        }
        return false;
    }


    public boolean isValid() {
        if (!this.childen.isEmpty()) {
            for (Module m : this.childen
            ) {
                if (!m.typeIsValid() || !m.getParameter().directionIsValid()) {
                    return false;
                }
            }
        }
        return true;
    }
}
