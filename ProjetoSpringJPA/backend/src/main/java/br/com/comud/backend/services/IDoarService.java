package br.com.comud.backend.services;

import br.com.comud.backend.models.Doacao;
import java.util.List;

public interface IDoarService {
	public void create(Doacao d);
	public Doacao readById (int idDoacao);
	public void update(Doacao d);
	public List<Doacao> readAll();
	public boolean existsById(int idDoacao);
}
