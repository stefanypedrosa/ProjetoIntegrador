package br.com.comud.backend.daos;

import org.springframework.data.repository.CrudRepository;

import br.com.comud.backend.models.Usuario;

public interface IUsuarioDB extends CrudRepository<Usuario, Integer>{

	//Usuario findUsuarioByEmailAndSenha(String email, String senha);

}
