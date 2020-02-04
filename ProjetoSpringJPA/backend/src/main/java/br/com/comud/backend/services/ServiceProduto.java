package br.com.comud.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.comud.backend.daos.IProdutoDB;
import br.com.comud.backend.models.Produto;

@Component
public class ServiceProduto implements IProdutoService{

	@Autowired
	IProdutoDB repo;
	
	@Override
	public void create(Produto p) {
		// TODO Auto-generated method stub
		repo.save(p);
		}

	@Override
	public Produto readById(int idProduto) {
		// TODO Auto-generated method stub
		return repo.findById(idProduto).get();
		}

	@Override
	public void update(Produto p) {
		// TODO Auto-generated method stub
		repo.save(p);
		}

	@Override
	public Produto deleteById(int idProduto) {
		// TODO Auto-generated method stub
		repo.deleteById(idProduto);
			Produto p = null;
			return p;
		}

	@Override
	public List<Produto> readAll() {
		// TODO Auto-generated method stub
		return (List<Produto>)repo.findAll();
	}


	@Override
	public boolean existsById(int idProduto) {
		// TODO Auto-generated method stub
		return repo.existsById(idProduto);
	}

}
