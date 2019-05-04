package com.screen.fleet.screenfleet.model;

public class Parameter {
    private String splitDirection;
    private int splitChildren;
    private String resourceUrl;

    public Parameter(String splitDirection, int splitChildren, String resourceUrl) {
        this.splitDirection = splitDirection.toLowerCase();
        this.splitChildren = splitChildren;
        this.resourceUrl = resourceUrl.toLowerCase();
    }

    public Parameter() {
    }

    public String getSplitDirection() {
        return splitDirection;
    }

    public void setSplitDirection(String splitDirection) {
        this.splitDirection = splitDirection;
    }

    public int getSplitChildren() {
        return splitChildren;
    }

    public void setSplitChildren(int splitChildren) {
        this.splitChildren = splitChildren;
    }

    public String getResourceUrl() {
        return resourceUrl;
    }

    public void setResourceUrl(String resourceUrl) {
        this.resourceUrl = resourceUrl;
    }

    @Override
    public String toString() {
        return "Parameter{" +
                "splitDirection='" + splitDirection + '\'' +
                ", splitChildren=" + splitChildren +
                ", resourceUrl='" + resourceUrl + '\'' +
                '}';
    }

    public boolean directionIsValid() {
        if (this.splitDirection.toLowerCase().equals("horizontal") || this.splitDirection.toLowerCase().equals("vertical") || this.splitDirection.equals(null)) {
            return true;
        }
        return false;
    }

}
