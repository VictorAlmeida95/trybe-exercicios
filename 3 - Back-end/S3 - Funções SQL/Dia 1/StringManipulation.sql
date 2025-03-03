-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA
SELECT substring('Oi, eu sou uma string', 5, 2);

-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT replace('Você já ouviu falar em DuckDuckGO?' ,'DuckDuckGO', 'Google');

-- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT char_length('Uma frase qualquer');

-- Extraia e retorne apenas a palavra “JavaScript” da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT substring('A linguagem JavaScript está entre as mais usadas', 12, 11);

-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT lcase('RUA NORTE 1500, SÃO PAULO, BRASIL');