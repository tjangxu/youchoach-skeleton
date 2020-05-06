package com.switchfully.youcoach.security.authentication.user;

import java.util.List;

public class SecuredUserRepository {
    private List<SecuredUser> securedUsers;

    public SecuredUserRepository(List<SecuredUser> securedUsers) {
        this.securedUsers = securedUsers;
    }

    public SecuredUser findByUsername(String username) {
        return securedUsers.stream().filter(user -> user.getUsername().equals(username)).findFirst().orElse(null);
    }
}
