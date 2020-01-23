package br.com.comud.backend.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.comud.backend.model.produto;

@RestController
@CrossOrigin("*")
public class produtoController {
	ArrayList<produto> lista = new ArrayList<produto>();
	int id = 0;
	
	@PostMapping("/produto/new")
	public ResponseEntity<produto> newProd(@RequestBody produto p){
		p.setIdProduto(id++);
		lista.add(p);
		return ResponseEntity.ok(p);
	}
	
	@PutMapping("/produto/alterar")
	public ResponseEntity<String> alteraProduto(@RequestBody produto p){
		int pos = -1;
		for (int i = 0; i < lista.size(); i++) {
			if (lista.get(i).getIdProduto() == p.getIdProduto()) {
				pos = i;
				break;
			} 
		}
		if (pos >= 0) {
			lista.set(pos, p);
			return ResponseEntity.ok("Success!!");
		}
		return ResponseEntity.status(403).build();
	}
}