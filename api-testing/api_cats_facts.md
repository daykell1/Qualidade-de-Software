 # 🐱 Teste de API - Cat FactS

---

# 📄 Caso de Teste 01 — Verificar status code da API Cat Facts

**ID:** CT-API-001
**Título:** Verificar se a API Cat Facts retorna código 200 ao consultar um fato.
**Prioridade:** Alta

* A API Cat Facts (`https://catfact.ninja/fact`) deve estar online.


**Resultado Esperado:**

* A resposta deve conter o status code **200 OK**.

**Resultado Obtido:**

* [ ] Aguardando execução
* [x] Passou
* [ ] Falhou

---

# 📄 Caso de Teste 02 — Validar resposta em formato JSON da API Cat Facts

**ID:** CT-API-002
**Título:** Validar que a API Cat Facts retorna a resposta em formato JSON.
**Prioridade:** Alta

**Resultado Esperado:**

* A resposta deve estar em formato **JSON** contendo os campos:

  * `"fact"` → texto com o fato aleatório sobre gatos.
  * `"length"` → número representando o tamanho do texto retornado.

**Exemplo de resposta válida:**

```json
{
  "fact": "Cats have five toes on their front paws, but only four on their back paws.",
  "length": 72
}
```

**Resultado Obtido:**

* [ ] Aguardando execução
* [x] Passou
* [ ] Falhou



