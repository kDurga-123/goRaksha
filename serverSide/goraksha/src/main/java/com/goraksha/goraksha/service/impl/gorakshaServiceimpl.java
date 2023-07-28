package com.goraksha.goraksha.service.impl;

import com.goraksha.goraksha.model.Effects;
import com.goraksha.goraksha.repository.Goraksharepository;
import com.goraksha.goraksha.service.GorakshaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class gorakshaServiceimpl implements GorakshaService {

    @Autowired
    Goraksharepository goraksharepository;

    @Override
    public Effects create(Goraksharepository goraksharepository){
        return goraksharepository.save(effects);
    }
    @Override
    public List<Effects> getAllEffetcs() {
        return List<goraksharepository> getAllEffetcs() {return Goraksharepository.save(effects);}
    }
    @Override
    public String deleteProduct(Effects effects){
        Goraksharepository.delete(Effects);
        return "product is deleted successfully";
    }
}
