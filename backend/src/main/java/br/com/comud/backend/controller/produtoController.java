package br.com.comud.backend.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.comud.backend.model.produto;

@RestController
@CrossOrigin("*")
public class produtoController {
	
	ArrayList<produto> lista = new ArrayList<produto>();
	
	
	
	@PostMapping("/produto/new")
	public ResponseEntity<produto> newProd(@RequestBody produto p){
		lista.add(p);
		return ResponseEntity.ok(p);
	}
	
	@GetMapping("/produto/todos")
	public ResponseEntity<ArrayList<produto>> getTodos(){
		return ResponseEntity.ok(lista);
	}
	
	@GetMapping("/produto/{id}")
	public ResponseEntity<produto> getProduto(@PathVariable int id){
	
		produto p = null;
		
		for (produto prod: lista) {
			if (prod.getId() == id) {
				p = prod;
				break;
			}
		}
			
			if (p != null) {  
				return ResponseEntity.ok(p);
			}
			else {
				return ResponseEntity.notFound().build();
			}		
		}
		
	}
	
