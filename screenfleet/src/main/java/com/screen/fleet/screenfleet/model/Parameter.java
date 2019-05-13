package com.screen.fleet.screenfleet.model;

/**
 * Class Module
 */
public class Parameter {
    private String splitDirection;
    private int splitChildren;
    private String resourceUrl;

    /**
     * Constructeur avec la direction, le nombres d'enfants et l'url des ressources du split.
     *
     * @param splitDirection
     *             "La splitDirection"
     * @param splitChildren
     *             "Le nombre d'enfant"
     * @param resourceUrl
     *             "L'url des ressources"
     */
    public Parameter(String splitDirection, int splitChildren, String resourceUrl) {
        this.splitDirection = splitDirection.toLowerCase();
        this.splitChildren = splitChildren;
        this.resourceUrl = resourceUrl.toLowerCase();
    }

    /**
     * Constructeur sans argument
     */
    public Parameter() {
    }

    /**
     * Retourne la valeur de la "splitDirection".
     *
     * @return Le valeur de la splitDirection sous forme de String.
     */
    public String getSplitDirection() {
        return splitDirection;
    }

    /**
     * Modifie la valeur de "splitDirection".
     *
     * @param splitDirection
     *             "La direction du split que l'on veut donner au paramètre"
     */
    public void setSplitDirection(String splitDirection) {
        this.splitDirection = splitDirection;
    }

    /**
     * Retourne la valeur de "splitChildren".
     *
     * @return Le valeur de splitChildren sous forme d'entier.
     */
    public int getSplitChildren() {
        return splitChildren;
    }

    /**
     * Modifie la valeur de "splitChildren".
     *
     * @param splitChildren
     *             "Le nombre d'enfant du split que l'on veut donner au paramètre"
     */
    public void setSplitChildren(int splitChildren) {
        this.splitChildren = splitChildren;
    }

    /**
     * Retourne la valeur de "resourceUrl".
     *
     * @return Le valeur de resrouceUrl sous forme de String.
     */
    public String getResourceUrl() {
        return resourceUrl;
    }

    /**
     * Modifie la valeur de "resourceUrl".
     *
     * @param resourceUrl
     *             "L'url de ressource l'on veut donner au paramètre"
     */
    public void setResourceUrl(String resourceUrl) {
        this.resourceUrl = resourceUrl;
    }

    /**
     * Fonction qui retourne les informations sur les paramètres sous forme de string.
     *
     * @return les informations sur les paramètres sous forme de string.
     */
    @Override
    public String toString() {
        return "Parameter{" +
                "splitDirection='" + splitDirection + '\'' +
                ", splitChildren=" + splitChildren +
                ", resourceUrl='" + resourceUrl + '\'' +
                '}';
    }

    /**
     * Fonction qui vérifie la justesse de la direction du split.
     *
     * @return true si la direction est valide, false dans le cas contraire.
     */
    public boolean directionIsValid() {
        if (this.splitDirection.toLowerCase().equals("horizontal") || this.splitDirection.toLowerCase().equals("vertical") || this.splitDirection.equals(null)) {
            return true;
        }
        return false;
    }

}
