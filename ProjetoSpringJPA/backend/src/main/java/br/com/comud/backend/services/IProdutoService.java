package br.com.comud.backend.services;

import java.util.List;

import br.com.comud.backend.models.Produto;

public interface IProdutoService {
	public void create(Produto p);
	public Produto readById (int id);
	public void update(Produto p);
	public Produto deleteById(int id);
	public List<Produto> readAll();
	public Produto readByName(String name);
	public boolean existsById(int id);
}
