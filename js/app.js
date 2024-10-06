const app = Vue.createApp({
  data() {
    return {
      fila: [],          
      gerar_senha: 0,     
      gerar_especial: 0   
    }
  },
  methods: {
    gerarSenha() {
      this.gerar_senha++;
      this.fila.push(this.gerar_senha.toString()); 
    },
    atenderSenha() {
      for (let i = 0; i < this.fila.length; i++) {
        if (!this.fila[i].startsWith("e")) { 
          this.fila.splice(i, 1);            
          break;                           
        }
      }
    },
    gerarSenhaEspecial() {
      this.gerar_especial++;
      this.fila.unshift("e" + this.gerar_especial); 
    },
    atenderSenhaEspecial() {
      for (let i = 0; i < this.fila.length; i++) {
        if (this.fila[i].startsWith("e")) { 
          this.fila.splice(i, 1);           
          break;                            
        }
      }
    }
  },
  template: `
    <section>
      <div id="botoes_gerarsenhas">
        <button @click="gerarSenha">Gerar senha</button>
        <button @click="gerarSenhaEspecial">Gerar senha especial</button>
      </div>
      <br>
      Fila:
      <div>
        {{ fila.join(' ') || 'Nenhuma senha na fila' }}
      </div>
      <br>
      <div id="botoes_atender">
        <button @click="atenderSenha">Atender fila</button>
        <button @click="atenderSenhaEspecial">Atender Especial</button>
      </div>
    </section>
  `
});

app.mount('#app');
