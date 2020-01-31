package br.com.comud.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.comud.backend.models.Produto;
import br.com.comud.backend.services.IProdutoService;


@RestController
@CrossOrigin("*")
public class ProdutoController {
	@Autowired
	private IProdutoService servico;
	
	@PostMapping("produto/create")
	public ResponseEntity<Produto> create(@RequestBody Produto p){
		try {
			servico.create(p);
			return ResponseEntity.ok(p);
		}
		catch(Exception ex) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	@GetMapping("produto/read/{idProduto}")
	public ResponseEntity<Produto> readById(@PathVariable int idProduto){
		Produto p = servico.readById(idProduto);
		if(p!=null) {
			return ResponseEntity.ok(p);
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@GetMapping("/produto/todos")
	public ResponseEntity<List<Produto>> readAll(){
		return ResponseEntity.ok(servico.readAll());
	}
	
	@GetMapping("/produto/{name}")
	public ResponseEntity<Produto> readByName(String name){
		Produto p =servico.readByName(name);
		if(p!=null) {
			return ResponseEntity.ok(p);
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PutMapping("produto/update")
	public ResponseEntity<Produto> update(@RequestBody Produto p){
			try {
			servico.update(p);
			return ResponseEntity.ok(p);
			}
			catch(Exception ex) {
				return ResponseEntity.badRequest().build();
			}
	}
	@DeleteMapping("produto/delete/{id}")
	public ResponseEntity<Produto> deleteById(@RequestBody Produto p, @PathVariable int idProduto){
		if(servico.existsById(idProduto)) {
			try {
			servico.deleteById(idProduto);
			return ResponseEntity.ok(p);
			}
			catch(Exception ex) {
				return ResponseEntity.badRequest().build();
			}
		}
		return ResponseEntity.notFound().build();
	}
}
