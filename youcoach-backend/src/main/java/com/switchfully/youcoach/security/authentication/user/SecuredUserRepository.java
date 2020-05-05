package com.switchfully.youcoach.security.authentication.user;

import com.google.common.collect.ImmutableMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class SecuredUserRepository {
    private static final Logger LOGGER = LoggerFactory.getLogger(SecuredUserRepository.class);

    private Map<Long, SecuredUser> userMap = new HashMap<>();
    private PasswordEncoder passwordEncoder;

    public SecuredUserRepository(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
        userMap.put(1L, new SecuredUser(1L, "Jos", passwordEncoder.encode("VanHetBos")));
    }

    public void save(SecuredUser securedUser) {
        userMap.put(securedUser.getId(), securedUser);
    }

    public SecuredUser findByUsername(String username) {
        return userMap.values().stream().filter(user -> user.getUsername().equals(username)).findFirst().orElse(null);
    }
}
