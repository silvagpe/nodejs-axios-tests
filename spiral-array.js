
/* 
spiral(i) => returns the spiral matrix of the square of i

spiral(1) => 1

spiral(2) => 1 2
             4 3

spiral(3) => 1 2 3
             8 9 4   
             7 6 5

 spiral(4) => 1  2  3  4
              12 13 14 5
              11 16 15 6
              10 9  8  7



spiral(2) => 1 2
             4 3
              */


             function spiral(size) {

                let matrix = Array.from(Array(size), () => new Array(size));
              
                let top = 0;
                let bottom = size - 1;
                let left = 0;
                let right = size - 1;
              
                let count = 0;
                let currentValue = 1;
                while (count < size) {
              
                  //In this part I walk at the top of the table and in the next cycle I advance one position down.
                  for (let index = left; index <= right && count < size; index++) {
                    matrix[top][index] = currentValue;
                    currentValue++;
                  }
                  top++;
              
                  //In this part I walk on the right, vertical side of the table and in the next cycle I move one position to the right, decreasing the width
                  for (let index = top; index <= bottom && count < size; index++) {
                    matrix[index][right] = currentValue;
                    currentValue++;
                  }
                  right--;
              
                  //In this part I walk on the bottom, horizontal, descending of the table and in the next cycle I move up one position.
                  for (let index = right; index >= left && count < size; index--) {
                    matrix[bottom][index] = currentValue;
                    currentValue++;
                  }
                  bottom--;
              
                  //Por fim, nesta parte eu ando do lado esquerdo vertical da tabela e no próximo ciclo eu movimento um posição para a esquerda.
                  for (let index = bottom; index >= top && count < size; index--) {
                    matrix[index][left] = currentValue;
                    currentValue++;
                  }
                  left++;
              
                  count++;
                }
              
                return matrix;
              }
              
              const result = spiral(6);
              console.table(result);