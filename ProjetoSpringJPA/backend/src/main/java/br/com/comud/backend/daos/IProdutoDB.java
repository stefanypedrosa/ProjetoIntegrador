package br.com.comud.backend.daos;

import org.springframework.data.repository.CrudRepository;

import br.com.comud.backend.models.Produto;

public interface IProdutoDB extends CrudRepository<Produto, Integer>{


}
