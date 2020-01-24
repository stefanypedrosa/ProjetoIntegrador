package br.com.comud.backend.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.comud.backend.model.usuario;
import br.com.comud.backend.security.autenticacao;
import br.com.comud.backend.security.token;

@RestController
@CrossOrigin("*")
public class usuarioController {
	ArrayList<usuario> lista = new ArrayList<usuario>();
	int id = 0;

	@PostMapping("/login")
	public ResponseEntity<token> autentica(@RequestBody usuario usuario) {
		for (usuario posicao : lista) {
			if (usuario.getEmail().equals(posicao.getEmail()) && usuario.getSenha().equals(posicao.getSenha())) {
				String tk = autenticacao.generateToken(usuario);
				token token = new token();
				token.setToken(tk);
				return ResponseEntity.ok(token);
			} else {
				return ResponseEntity.status(403).build();
			}
		}
		return ResponseEntity.status(403).build();
	}

	@PostMapping("/usuario/new")
	public ResponseEntity<usuario> newUser(@RequestBody usuario u) {
		if (lista.size() == 0) {
			u.setIdUsuario(id++);
			lista.add(u);
			return ResponseEntity.ok(u);
		} else {
			for (usuario posicao : lista) {
				if (u.getEmail().equals(posicao.getEmail())) {
					return ResponseEntity.status(403).build();
				} else {
					lista.add(u);
					return ResponseEntity.ok(u);
				}
			}
		}
		return ResponseEntity.status(403).build();
	}

	@PutMapping("/usuario/altera")
	public ResponseEntity<String> alteraUsuario(@RequestBody usuario u) {
		int pos = -1;
		for (int i = 0; i < lista.size(); i++) {
//			if (u.getEmail().equals(lista.get(i).getEmail())) {
//				return ResponseEntity.status(403).build();
//			} else 
			if (lista.get(i).getIdUsuario() == u.getIdUsuario()) {
				pos = i;
				break;
			}
		}
		if (pos >= 0) {
			lista.set(pos, u);
			return ResponseEntity.ok("Sucess!!");
		}
		return ResponseEntity.status(403).build();
	}

	@GetMapping("/usuario/todos")
	public ResponseEntity<ArrayList<usuario>> getTodos(){
		return ResponseEntity.ok(lista);
	}
}
