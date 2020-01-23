package br.com.comud.backend.model;

public class usuario {
	private int idUsuario;
	private String nome;
	private String email;
	private String telefone;
	private String senha;
	private String confSenha;
	
	public int getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getConfSenha() {
		return confSenha;
	}
	public void setConfSenha(String confSenha) {
		this.confSenha = confSenha;
	}
	
	@Override
	public String toString() {
		return "usuario [idUsuario=" + idUsuario + ", nome=" + nome + ", email=" + email + ", telefone=" + telefone
				+ ", senha=" + senha + ", confSenha=" + confSenha + "]";
	}
	
}
