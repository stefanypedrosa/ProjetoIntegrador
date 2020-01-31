package br.com.comud.backend.services;

import br.com.comud.backend.models.Ong;

public interface IOngService {
	public void create(Ong ong);
	public Ong readById (int id);
	public void update(Ong ong);
	public Ong deleteById(int id);
	public boolean existsById(int id);
}
