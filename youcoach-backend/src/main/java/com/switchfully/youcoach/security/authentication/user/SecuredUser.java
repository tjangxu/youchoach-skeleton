package com.switchfully.youcoach.security.authentication.user;

public class SecuredUser {

    private Long id;
    private String username;
    private String password;

    public SecuredUser(Long id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public SecuredUser() {

    }

    public String getUsername() {
        return username;
    }

    public SecuredUser setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public SecuredUser setPassword(String password) {
        this.password = password;
        return this;
    }

    public Long getId() {
        return id;
    }

    public SecuredUser setId(Long id) {
        this.id = id;
        return this;
    }
}
