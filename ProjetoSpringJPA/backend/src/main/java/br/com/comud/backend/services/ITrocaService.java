package br.com.comud.backend.services;

import br.com.comud.backend.models.Troca;
import java.util.List;

public interface ITrocaService{
    public void create(Troca t);
    public Troca readById (int idTroca);
    public void update(Troca t);
    public List<Troca> readAll();
    public boolean existsById(int idTroca);
}
