package br.com.comud.backend.services;

import br.com.comud.backend.models.Ong;

public interface IOngService {
	public void create(Ong ong);
	public Ong readById (int idOng);
	public void update(Ong ong);
	public boolean existsById(int idOng);
}
