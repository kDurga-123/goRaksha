package com.goraksha.goraksha.controllers;

import com.goraksha.goraksha.model.Effects;
import com.goraksha.goraksha.service.GorakshaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/effects")
public class gorakshaControllers {
    @Autowired
    GorakshaService GorakshaService;
    @PostMapping("/create")
    public Effects create (Effects Effects) {return GorakshaService.create(Effects);}
    }
}
