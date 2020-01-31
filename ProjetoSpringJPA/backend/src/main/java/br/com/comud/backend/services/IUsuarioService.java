package br.com.comud.backend.services;

import br.com.comud.backend.models.Usuario;

public interface IUsuarioService {
	public void create(Usuario u);
	public Usuario readById (int idUsuario);
	public void update(Usuario u);
	public Usuario deleteById(int idUsuario);
	public boolean existsById(int idUsuario);
	public Usuario autenticarUsuario(Usuario usuario);
}
