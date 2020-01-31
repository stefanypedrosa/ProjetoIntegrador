package br.com.comud.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.comud.backend.daos.IUsuarioDB;
import br.com.comud.backend.models.Usuario;

@Component
public class ServiceUsuario implements IUsuarioService{

	@Autowired
	IUsuarioDB repo;
	
	@Override
	public void create(Usuario u) {
		// TODO Auto-generated method stub
		repo.save(u);
	}

	@Override
	public Usuario readById(int idUsuario) {
		// TODO Auto-generated method stub
			return repo.findById(idUsuario).get();
	}

	@Override
	public void update(Usuario u) {
		// TODO Auto-generated method stub
		repo.save(u);
	}

	@Override
	public Usuario deleteById(int idUsuario) {
		// TODO Auto-generated method stub
			repo.deleteById(idUsuario);
			Usuario u = null;
			return u;
	}

	@Override
	public boolean existsById(int idUsuario) {
		// TODO Auto-generated method stub
		return repo.existsById(idUsuario);
	}

	@Override
	public Usuario autenticarUsuario(Usuario usuario) {
		// TODO Auto-generated method stub
//		return repo.findUsuarioByEmailAndSenha(usuario.getEmail(), usuario.getSenha());
		return null;
	}
}
