package com.switchfully.youcoach.security.authentication.user;

import org.assertj.core.api.Assertions;
import org.assertj.core.util.Lists;
import org.junit.jupiter.api.Test;

class SecuredUserRepositoryTest {

    @Test
    void name() {
        SecuredUserRepository securedUserRepository = new SecuredUserRepository(Lists.newArrayList(new SecuredUser(1L, "username", "password")));

        SecuredUser securedUser = securedUserRepository.findByUsername("username");

        Assertions.assertThat(securedUser.getId()).isEqualTo(1);
    }
}
