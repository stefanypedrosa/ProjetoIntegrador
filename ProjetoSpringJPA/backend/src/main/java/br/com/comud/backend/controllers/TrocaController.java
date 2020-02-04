package br.com.comud.backend.controllers;

import br.com.comud.backend.models.Produto;
import br.com.comud.backend.models.Troca;
import br.com.comud.backend.services.ITrocaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class TrocaController {
    @Autowired
    private ITrocaService servico;
    
    @PostMapping("trocar/create")
    public ResponseEntity<Troca> create(@RequestBody Troca troca){
        if(troca.getRemetente() != troca.getDestinatario()){    //verifica se usuarios são diferentes
            if(troca.getCedido() != troca.getRecebido()){       //verifica se produtos são diferentes
                if(troca.getRemetente().getIdUsuario() == troca.getRecebido().getUsuario().getIdUsuario()){     //verifica se produto1 pertence ao usuario1
                    if(troca.getDestinatario().getIdUsuario() == troca.getCedido().getUsuario().getIdUsuario()){    //verifica se produto2 pertence ao usuario2
                        if(troca.getCedido().getStatus().equals("DISPONÍVEL") && troca.getRecebido().getStatus().equals("DISPONÍVEL")){     //verifica status do produto
                            try {
                                troca.getCedido().setStatus("TROCADO");
                                troca.getRecebido().setStatus("TROCADO");
                                servico.create(troca);
                                return ResponseEntity.ok(troca);
                            }
                            catch(Exception ex) {
                                return ResponseEntity.badRequest().build();
                            }
                        }
                    }
                }
            }
        }
        return ResponseEntity.badRequest().build();
    }
        
    @GetMapping("trocar/read/{idtroca}")
    public ResponseEntity<Troca> readById(@PathVariable int idtroca){
        Troca troca = servico.readById(idtroca);
        if(troca!=null) {
            return ResponseEntity.ok(troca);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
        
    @PutMapping("trocar/update/{idtroca}")
    public ResponseEntity<Troca> update(@RequestBody Troca troca, @PathVariable int idtroca){
        if(servico.existsById(idtroca)) {
            try {
                servico.update(troca);
                return ResponseEntity.ok(troca);
            }
            catch(Exception ex) {
                return ResponseEntity.badRequest().build();
            }
        }
        return ResponseEntity.badRequest().build();
    }
    
    @GetMapping("/trocar/todos")
    public ResponseEntity<List<Troca>> readAll(){
	return ResponseEntity.ok(servico.readAll());
    }
}
