package com.screen.fleet.screenfleet.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

/**
 * Class Module
 */
public class Module {
    private String type;
    private LinkedList<Module> children;
    private HashMap<String, String> parameters;

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
     * @param parameters
     *             "Les paramètres du module"
     */
    public Module(String type, LinkedList<Module> children, HashMap<String, String> parameters) {
        this.type = type;
        this.children = children;
        this.parameters = parameters;
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
    public LinkedList<Module> getChildren() {
        return children;
    }

    /**
     * Modifie la valeur du "children".
     *
     * @param children
     *             "La liste des children que l'on veut donner au Module"
     */
    public void setChildren(LinkedList<Module> children) {
        this.children = children;
    }

    /**
     * Retourne la valeur de "parameters".
     *
     * @return Les paramètres du Module.
     */
    public HashMap<String, String> getParameters() {
        return parameters;
    }

    /**
     * Modifie la valeur du "parameters".
     *
     * @param parameters
     *             "Le parameters que l'on veut donner au Module"
     */
    public void setParameters(HashMap<String, String> parameters) {
        this.parameters = parameters;
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
                ", children=" + children +
                ", parameters=" + parameters +
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

        for (String s: elem) {
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
        if (this.children != null && !this.children.isEmpty()) {
            for (Module m : this.children) {
                if (!m.typeIsValid()) {
                    return false;
                }
            }
        }
        return true;
    }
}
