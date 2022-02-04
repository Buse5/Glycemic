package com.works.glycemic.services;

import com.works.glycemic.models.User;
import com.works.glycemic.repositories.RoleRepository;
import com.works.glycemic.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserService extends SimpleUrlLogoutSuccessHandler implements UserDetailsService {
    final RoleRepository rRepo;
    final UserRepository uRepo;

    public UserService(RoleRepository rRepo, UserRepository uRepo) {
        this.rRepo = rRepo;
        this.uRepo = uRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserDetails userDetails=null;
        Optional<User> oUser= uRepo.findByEmailEqualsIgnoreCase(email);
        if(oUser.isPresent()){

        }

        return null;
    }

}
