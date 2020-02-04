package br.com.comud.backend.controllers;

import br.com.comud.backend.services.IDoarService;
import br.com.comud.backend.models.Doacao;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class DoacaoController {
    @Autowired
    private IDoarService servico;
    
    @PostMapping("doar/create")
    public ResponseEntity<Doacao> create(@RequestBody Doacao doacao){
//        if(doacao.getProduto().getUsuario().getIdUsuario() == doacao.getUsuario().getIdUsuario()){		//verifica se produto pertence a usuario
//            if(doacao.getProduto().getStatus().equals("DISPONÍVEL")){		//verifica status do produto
                try {
                    doacao.getProduto().setStatus("DOADO");
                    servico.create(doacao);
                    return ResponseEntity.ok(doacao);
                }
                catch(Exception ex) {
                    return ResponseEntity.badRequest().build();
                }
//            }
//        }
//        return ResponseEntity.notFound().build();
    }
        
    @GetMapping("doar/read/{iddoacao}")
    public ResponseEntity<Doacao> readById(@PathVariable int iddoacao){
        Doacao doacao = servico.readById(iddoacao);
        if(doacao!=null) {
            return ResponseEntity.ok(doacao);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
        
    @PutMapping("doar/update/{iddoacao}")
    public ResponseEntity<Doacao> update(@RequestBody Doacao doacao, @PathVariable int iddoacao){
        if(servico.existsById(iddoacao)) {
            try {
                servico.update(doacao);
                return ResponseEntity.ok(doacao);
            }
            catch(Exception ex) {
                return ResponseEntity.badRequest().build();
            }
        }
        return ResponseEntity.badRequest().build();
    }
    
    @GetMapping("/doar/todos")
    public ResponseEntity<List<Doacao>> readAll(){
	return ResponseEntity.ok(servico.readAll());
    }
}
