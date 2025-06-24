## Retrieve Cell Value From CSV File

This little script will retrieve the value from a matrix on the specified [row]x[column]. It loads a dataset provided from the *dataset.csv* file that must respect the desired hexadecimal format and then gets the value from the provided row and column, to later return it as a decimal number.

We use an array of arrays to store this data and with a *readableStream* and *readline* we make sure to read the csv file line by line and store the data "row by row". After loading the data, we just retrieve the desired value from the provided row and column on the CLI and convert it to decimals.

### How to run:

To run this program certain conditions must be met:
1. **Node** must be installed on the machine and we have to run the command `node getCoord.js [row] [column]` on the CLI. Make sure you are in the right folder. **row** and **column** are actual values of the desired row and column we want to retrieve the value.
2. Dataset must be provided in our *dataset.csv* file, make sure it has the right syntax.

### Notes:

- Provided dataset will be in hexadecimal format, returned format will be decimal.
- I thought of defining a mathematical function that calculates the value of the cell based on the row and column but since the dataset could be random (with random data), this idea was discarded.
- Hexadecimal number length won't be limited to 2 as shown in the pdf dataset.
- Hexadecimal number on dataset must be a string with the format 0x0000....
- Invalid data/format will be ignored.

## PDF dataset interesing properties:

  1. Columns have a difference of +1 or -1 with some exceptions.
  2. Rows have a difference of +4 or -4 with some exceptions.
  3. They all have 2 hex digits.
