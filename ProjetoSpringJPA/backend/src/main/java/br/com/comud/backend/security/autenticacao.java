package br.com.comud.backend.security;

import javax.xml.bind.DatatypeConverter;

import br.com.comud.backend.models.Usuario;

public class autenticacao {
	private static final String PREFIXO="*CoMuD|";
	public static token generateToken(Usuario usuario) {
		token token = new token();
		String str = PREFIXO+"|"+usuario.getIdUsuario()+"|"+usuario.getEmail()+"|"+usuario.getNome();
		String strToken = DatatypeConverter.printHexBinary(str.getBytes());
		
		token.setToken(strToken);
		return token;
		
	}
	
	public static boolean isValid(String token) {
		String str = new String(DatatypeConverter.parseHexBinary(token));
		System.out.println("Token decode:"+str);
		String parts[] = str.split("\\|");
		System.out.println(parts.length);
		System.out.println(parts[0].equals(PREFIXO));
		return (parts.length == 4 && parts[0].equals(PREFIXO));
	}
	
	public static Usuario extractUser(String token) {
		String str = new String(DatatypeConverter.parseHexBinary(token));
		String parts[] = str.split("\\|");
		Usuario usuario = new Usuario();
		usuario.setIdUsuario(Integer.parseInt(parts[1]));
		usuario.setEmail(parts[2]);
		usuario.setNome(parts[3]);
		return usuario;
	}

}