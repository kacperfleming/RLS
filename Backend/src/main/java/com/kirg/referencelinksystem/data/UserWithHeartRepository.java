package com.kirg.referencelinksystem.data;


import com.kirg.referencelinksystem.entity.UserWithHeart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserWithHeartRepository extends JpaRepository<UserWithHeart,Long> {
}
