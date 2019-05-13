package com.screen.fleet.screenfleet.model;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * Class Module
 */
public class Module {
    private String type;
    private LinkedList<Module> childen;
    private Parameter parameter;

    /**
     * Constructeur sans argument
     */
    public Module(){

    }

    /**
     * Constructeur avec le type et les enfants et les paramètres que l'on veut attribuer au Module.
     *
     * @param type
     *             "Le type du module"
     * @param children
     *             "La liste des modules enfants du module"
     * @param parameter
     *             "Les paramètres du module"
     */
    public Module(String type, LinkedList<Module> childen, Parameter parameter) {
        this.type = type;
        this.childen = childen;
        this.parameter = parameter;
    }

    /**
     * Retourne la valeur du "type".
     *
     * @return Le valeur du type sous forme de string.
     */
    public String getType() {
        return type;
    }

    /**
     * Modifie la valeur du "type".
     *
     * @param type
     *             "Le type que l'on veut donner au Module"
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * Retourne la valeur de "children".
     *
     * @return La liste des enfants du Module.
     */
    public LinkedList<Module> getChilden() {
        return childen;
    }

    /**
     * Modifie la valeur du "children".
     *
     * @param children
     *             "La liste des children que l'on veut donner au Module"
     */
    public void setChilden(LinkedList<Module> childen) {
        this.childen = childen;
    }

    /**
     * Retourne la valeur de "parameter".
     *
     * @return Les paramètres du Module.
     */
    public Parameter getParameter() {
        return parameter;
    }

    /**
     * Modifie la valeur du "parameter".
     *
     * @param parameter
     *             "Le parameter que l'on veut donner au Module"
     */
    public void setParameter(Parameter parameter) {
        this.parameter = parameter;
    }

    /**
     * Fonction qui retourne les informations sur le module sous forme de string.
     *
     * @return les informations sur le module sous forme de string.
     */
    @Override
    public String toString() {
        return "Module{" +
                "type='" + type + '\'' +
                ", childen=" + childen +
                ", parameter=" + parameter +
                '}';
    }

    /**
     * Fonction qui vérifie la justesse du type d'un Module.
     *
     * @return true si le type est valide, false dans le cas contraire.
     */
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

    /**
     * Fonction qui vérifie la justesse d'un Module.
     *
     * @return true si le module est valide, false dans le cas contraire.
     */
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
