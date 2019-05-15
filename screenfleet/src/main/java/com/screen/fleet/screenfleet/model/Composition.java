package com.screen.fleet.screenfleet.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Class composition
 */
@Document(collection = "compositions")
public class Composition {

    @Id
    private int id;

    private String name;
    private Module moduleTree;

    /**
     * Constructeur sans argument
     */
    public Composition(){

    }

    /**
     * Constructeur avec le name et l'objet Module que l'on veut attribuer à la composition
     *
     * @param name
     *             "Le nom de la composition"
     * @param moduleTree
     *             "Le moduleTree représentant la composition"
     */
    public Composition(String name, Module moduleTree) {
        this.name = name;
        this.moduleTree = moduleTree;
        this.id = (int) Math.random() * 1000000;
    }

    /**
     * Retourne la valeur de l' "id".
     *
     * @return Le valeur de l'id sous forme d'entier.
     */
    public int getId() {
        return id;
    }

    /**
     * Retourne la valeur du "name".
     *
     * @return Le valeur du name sous forme de string.
     */
    public String getName() {
        return name;
    }

    /**
     * Retourne la valeur du "moduleTree".
     *
     * @return Le valeur du name sous forme de Module object.
     */
    public Module getModuleTree() {
        return moduleTree;
    }

    /**
     * Modifie la valeur du "name".
     *
     * @param name
     *             "Le name que l'on veut donner à la conmposition"
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Modifie la valeur du "moduleTree".
     *
     * @param moduleTree
     *             "L que l'on veut donner à la conmposition"
     */
    public void setModuleTree(Module moduleTree) {
        this.moduleTree = moduleTree;
    }

    /**
     * Fonction qui retourne les informations sur la composition sous forme de string.
     *
     * @return les informations sur la composition sous forme de string.
     */
    @Override
    public String toString() {
        return "Composition{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", moduleTree=" + moduleTree +
                '}';
    }

    /**
     * Fonction qui vérifie la justesse d'une composition.
     *
     * @return true si le Module est valide, false dans le cas contraire.
     */
    public boolean isValid() {
        return this.moduleTree.isValid();
    }
}
