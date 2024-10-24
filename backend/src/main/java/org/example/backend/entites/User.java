package org.example.backend.entites;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "`user`")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private BigDecimal credits;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String profileImageUrl;

    @OneToMany(mappedBy = "user")
    private Set<Car> cars = new HashSet<>();

    public Long getId() {
        return id;
    }

    public User setId(Long id) {
        this.id = id;
        return this;
    }

    public BigDecimal getCredits() {
        return credits;
    }

    public User setCredits(BigDecimal credits) {
        this.credits = credits;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public User setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public User setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
        return this;
    }

    public Set<Car> getCars() {
        return cars;
    }

    public User setCars(Set<Car> cars) {
        this.cars = cars;
        return this;
    }
}
