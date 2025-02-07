
//  1/28/25 - DELETED PUSHWORD... TODAY  

class RecursiveClass {
  constructor() {
    this.lastRowIndexToPushOn = -1;
    this.checkOnLastLineSoCreateRow = false;
    this.bottomRow = -1;
    this.bottomRowFromLastRound = [];
    this.tracksRow = 0;
    this.hasBeenInZeroHorizPosition = false;
  }

  deleteRow(arr, rowNumber) {hoe
    arr.splice(rowNumber, 1);
    return arr;
  }

  createRow(grid, rowIndex) {
    //remove last line, which is exclamation marks
    //this.deleteRow(grid, rowIndex+1)
    //add a new row of nulls

    grid.push([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]),
      //add exclamation marks at end again, which is for padding
      //grid.push(["!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!","!", "!", "!", "!", "!" , "!" ]),
      //important, allows new line to display in the drawgrid
      HEIGHT++;
    //drawGrid(HEIGHT, WIDTH)
    return grid;
  }


  getLastSpaceOrNull(grid, topRow) {  //173 GOES HERE AND WORD IS ZERO LENGHT
    //get left phrase before last dash
    //checks for either space or dash, whichever is less characters
    let lastIndexOfNullOnTopRow = topRow.lastIndexOf("-");
    let lastIndexOfSpaceOnTopRow = topRow.lastIndexOf(" ");
    let maxIndexOfNullOrString = 0;
    if (lastIndexOfSpaceOnTopRow >= lastIndexOfNullOnTopRow) {
      maxIndexOfNullOrString = lastIndexOfSpaceOnTopRow;
    } else {
      //choose space or null character that is farthest right on row
      maxIndexOfNullOrString = lastIndexOfNullOnTopRow;
    }
    if (maxIndexOfNullOrString === -1) {
      return grid;
    }
    //gets the word after dash or spacew
    const [left, rightWordAtEndOfRowOne] = this.splitAtIndex(
      topRow,
      maxIndexOfNullOrString + 1
    );
    return { leftSide: left, rightSide: rightWordAtEndOfRowOne };
  }

  placeCharacterWithoutInsertDoThisFirst(rowIndex, colIndex, grid, character) {
    grid[rowIndex][colIndex] = character;
    return grid;
  }
  deleteCharacterWithoutPull(rowIndex, colIndex, grid, character) {
    grid[rowIndex][colIndex] = "-";
    return grid;
  }

  //ths is for when two letter are entered on last column (pushes to next row)
  //THIS IS CALLED TWICE, COULD WORK
  //CONSIDER ADPATING CODE INSTAED ; LOOK AT MORE THAN HEIGHT-2 IN pushWordsDoThisSecond
  //CAUSES AT LEAST ONE INDEXING ERROR
  //READING LENGTH ERROR

  //WILL THE LAST LINE ALWAYS BE EMPTY HERE?
  lastLineWorkings(grid, rowIndex) {
    let topRow = grid[rowIndex - 1];
    let bottomRow = grid[rowIndex];
    //return grid
    let lastIndexOfNullOnTopRow = topRow.lastIndexOf("-");
    //get top right word
    const [leftOfWordTopRow, rightWordTopRow] = this.splitAtIndex(
      topRow,
      lastIndexOfNullOnTopRow + 1
    );
    //get left word for bottom
    const firstIndexOfNullOnBottomRow = bottomRow.indexOf("-");
    const [leftWordBottomRow, rightSide] = this.splitAtIndex(
      bottomRow,
      firstIndexOfNullOnBottomRow
    );
    const combine = [...rightWordTopRow, ...leftWordBottomRow];
    grid[rowIndex] = combine;
    horizontalCursorPosition = combine.length * 5;
    //cover rest of bottom row with dashes (after word from top)
    for (let i = combine.length; i < WIDTH; i++) {
      grid[rowIndex][i] = "-";
    }
    //verticalCursorPosition = verticalCursorPosition + 10
    //cover top row where word was, with dashes
    for (let i = WIDTH - rightWordTopRow.length; i < WIDTH; i++) {
      grid[rowIndex - 1][i] = "-";
    }

    return grid;
  }

  //12/22/24
  pushWordsDoThisSecond(grid, newRemainder, rowIndex, fromIndex) {
    //
    //for putting cursor on row 2 for lefthand words greater than 2
    let TwoOrMoreCharactersAtRightWordAtRowOne = false;

    if (rowIndex > HEIGHT - 1) {
      return grid;
    }

    // on last row and last column and space does not have a dash
    if (rowIndex === HEIGHT - 1 && grid[HEIGHT - 1][WIDTH - 1] != "-") {
      this.createRow(grid, rowIndex);
      //posiiton cursor on next row, first character
      horizontalCursorPosition = horizontalCursorPosition + 5;
    }
    
    let wordAtEndOfRowOne = [];
    let topRow = grid[rowIndex - 1];
    let bottomRow = grid[rowIndex];
    //has no row above it
    if (rowIndex == 0) {
      this.pushWordsDoThisSecond(grid, [""], rowIndex + 1, false);
      return grid;
    }

    //right and left set, of top row - seperated by last soace or null
    let holder = this.getLastSpaceOrNull(grid, topRow);
    wordAtEndOfRowOne = holder.rightSide;
    let lengthOfRightWordAtRowOne = wordAtEndOfRowOne.length;
    //?
    if (lengthOfRightWordAtRowOne >= 2) {
      TwoOrMoreCharactersAtRightWordAtRowOne = true;
    }

    //On last line, has no dashes on both sides - calls special function
    //first variable is short circuit
    if (
      rowIndex != 0 &&
      grid[rowIndex][0] != "-" &&
      grid[rowIndex - 1][WIDTH - 1] != "-" &&
      rowIndex === HEIGHT - 1
    ) {
      this.lastLineWorkings(grid, rowIndex);
      console.log("here");
    }
    //code available before 2/6/25

    //looking at index of both last space and last null
    let firstIndexOfNullOnBottomRow = bottomRow.indexOf("-");
    let firstIndexOfSpaceOnBottomRow = bottomRow.indexOf(" ");

    //first index is set to last character of row
    if (firstIndexOfNullOnBottomRow === -1) {
      firstIndexOfNullOnBottomRow = 27;
    }
    //first index is set to last character of row
    if (firstIndexOfSpaceOnBottomRow === -1) {
      firstIndexOfSpaceOnBottomRow = 27;
    }
    let lastIndexOfFirstWord = 0;
    //choose whether space or null character that is farthest right on row
    if (firstIndexOfSpaceOnBottomRow < firstIndexOfNullOnBottomRow) {
      lastIndexOfFirstWord = firstIndexOfSpaceOnBottomRow;
    } else {
      lastIndexOfFirstWord = firstIndexOfNullOnBottomRow;
    }
    //Divide with farthest word on bottom row.
    //!!
    const [firstWordBottomRow, phraseAfterLeftWordBottomRow] = this.splitAtIndex(
      bottomRow,
      lastIndexOfFirstWord
    );
    //length of left word
    let lengthOffirstWordBottomRow = firstWordBottomRow.length;
    //to check left hand word, before a null or space
    let LengthOfNullsAndSpacesAfterFirstLeftMostCharacter = 0;
    //because this code does not have a row below it, it is bottom row
    //for loop to find the correct index
    if (rowIndex != HEIGHT - 1) {
      for (let i = lengthOffirstWordBottomRow; i < WIDTH - 1; i++) {
        if (grid[rowIndex+1][i] != "-") {
          break;
        }
        LengthOfNullsAndSpacesAfterFirstLeftMostCharacter++;
      }
    }
    //no room for push, continue with next recursion - no remainder?!
    if (LengthOfNullsAndSpacesAfterFirstLeftMostCharacter === 0) {
      this.pushWordsDoThisSecond(grid, [""], rowIndex + 1, false);
      return grid;
    }

    //will word fit below in the spaces and nulls that are available after first characters
    if (
      lengthOfRightWordAtRowOne <
        LengthOfNullsAndSpacesAfterFirstLeftMostCharacter &&
      lengthOfRightWordAtRowOne > 0
    ) {
      let combined = [];

      //code available before 2/6/25 - lengthOfRightWordAtRowOne
      //put row together
      combined = [
        ...wordAtEndOfRowOne,
        ...firstWordBottomRow,
        ...phraseAfterLeftWordBottomRow,
      ];
      //length of bottom row word on left
      let lengthOfFirstWordBottomRow = firstWordBottomRow.length;
      //get one rows worth - and reminder to pass into recursion
      const [newBottomRow, newRemainder] = this.splitAtIndex(combined, WIDTH);
      


      
      if (
        //code available before 2/6/25 - verticalcurs...
        //no word passing across borders with shortcircuit
        //short circuit
        rowIndex != 0 &&
        grid[rowIndex - 1][WIDTH - 1] === "-" ||
        grid[rowIndex][0] === "-"
      ) 
      { 
        
        this.pushWordsDoThisSecond(grid, [""], rowIndex + 1, false);
        return grid;
      }
      //Finally, set the row.
      grid[rowIndex] = newBottomRow;
      //fill in moved text space with dashes on top row
      for (let i = WIDTH - lengthOfRightWordAtRowOne; i < WIDTH; i++) {
        grid[rowIndex - 1][i] = "-";
      }

      
      
      //!BELOW IS CURSOR ADJUSTMENT!
      //was not enough room for right lower row to push into - DON'T MOVE CURSOR
      // if (

      //   lengthOfRightWordAtRowOne > LengthOfNullsAndSpacesAfterFirstLeftMostCharacter &&
      //   lengthOfRightWordAtRowOne != 0 &&
      //   lengthOfRightWordAtRowOne != -1
      // ) {
      //   console.log("1")
      //   //alert("1")
      //     //horizontalCursorPosition = 10;
      // }

      // //ready to move to slot below
      // //????
      // if (TwoOrMoreCharactersAtRightWordAtRowOne) {
      //   horizontalCursorPosition = 0;
      //   horizontalCursorPosition = horizontalCursorPosition = (lengthOfRightWordAtRowOne + 1) * 5;
      // }

      //if vert = rowindex or rowindex + 1 and if both ends have characters and there is a slot, put character at a.length + b.length : rowindex+1

      //from 232 - will fit in slot

      ///check if horiocur... is in top
      ///check if it is in below
      
      let flagContainedInBorderCrossing = false;
      //upper flag check
      for(let i = WIDTH - lengthOfRightWordAtRowOne ;i < WIDTH; i++){
        if(verticalCursorPosition/10 === rowIndex-1  && horizontalCursorPosition/5 === i + 1){
        verticalCursorPosition = rowIndex * 10;
        horizontalCursorPosition = 0;
        horizontalCursorPosition = ((lengthOfRightWordAtRowOne* 5) + (lengthOfFirstWordBottomRow*5));
        flagContainedInBorderCrossing = true
      }
          break 
        }
      

        //FINISH THIS:   AND CREATE ROW ISNT RIGHT - OMLY WHEN CHARACTER ON LAST COLUMN
      if (flagContainedInBorderCrossing === false){
        for(let i = 0; i< lengthOffirstWordBottomRow - 1; i++){
          if(verticalCursorPosition/10 === rowIndex && horizontalCursorPosition/5 === i){
            flagContainedInBorderCrossing = true;
            break
          }
        }
      }
      
      console.log("2")
      ///alert("2")
      this.pushWordsDoThisSecond(grid, newRemainder, rowIndex + 1, false);
      return grid;
      } //ends fits in left hand slot

   
    
    //if here, word doesn't fit
    this.pushWordsDoThisSecond(grid, [""], rowIndex + 1, false);
    return grid;
  }

  fillNullWithDashOnRow(RowIndex, arrayToChange) {
    for (let i = 0; i < WIDTH; i++) {
      if (
        arrayToChange[RowIndex][i] == "" ||
        arrayToChange[RowIndex][i] == " " ||
        typeof arrayToChange[RowIndex][i] == "undefined"
      ) {
        arrayToChange[RowIndex][i] = "-";
      }
    }
    return arrayToChange;
  }

  splitAtIndex(arr, index) {
    console.log("index: ", index);
    console.log("arr: ", arr);
    const front = arr.slice(0, index);
    const back = arr.slice(index);
    return [front, back];
  }

  //takes care of starting row, puts row after cursor on next row, and fill remaining spaces with dashes
  divideFirstRowAsNeeded(grid, colIndex, rowIndex) {
    let topRow = grid[rowIndex];
    let [leftTopRow, rightTopRow] = this.splitAtIndex(topRow, colIndex);
    grid[rowIndex] = leftTopRow;
    grid[rowIndex + 1] = rightTopRow;
    //make all dashes
    let leftTopRowLength = leftTopRow.length;
    if (leftTopRowLength === 0) {
      grid[rowIndex] = [
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
        DASH,
      ];
    } else {
      for (let i = leftTopRowLength; i < WIDTH; i++) {
        grid[rowIndex][i] = "-";
      }
      for (let i = WIDTH - leftTopRowLength; i < WIDTH; i++) {
        grid[rowIndex + 1][i] = "-";
      }
    }
    return grid;
  }

  ///TRYING ENTER, LOOK AT RIGHT END POINTS AND OTHERWISE TEST.

  //1/22/25- Looks good.
  divideNextRowsAsNeeded(grid, colIndex, rowIndex, remainder) {
    this.tracksRow++;
    let bottomRow = grid[rowIndex];
    let topRow = grid[rowIndex + 1];

    //taking the rigth top row and adhering it in front of next bottom row, pushes row right
    //loop
    //remove right end and adhere again
    let [bottomLeftRow, BottomRightRow] = this.splitAtIndex(
      bottomRow,
      colIndex
    );
    if (rowIndex > HEIGHT - 2) {
      drawGrid(HEIGHT, WIDTH);
      return grid;
    } else {
      //splits top in to at cursor
      let [leftTopRow, rightTopRow] = this.splitAtIndex(topRow, colIndex);

      let buildNextRow = "";
      //happens on first loop
      if (remainder == "") {
        //sets this to upper-lines right side and the entire lower
        buildNextRow = [...BottomRightRow, ...topRow];
      } else {
        //add extra characters than repeat: put on and take off a row  - LIFO.  "last in first out"
        buildNextRow = [...remainder, ...topRow];
      }

      const [oneRowsWorth, newRemainder] = this.splitAtIndex(
        buildNextRow,
        WIDTH
      );
      grid[rowIndex + 1] = oneRowsWorth;
      drawGrid(HEIGHT, WIDTH);
      //puts extra in remainder - starts at loop 1
      this.divideNextRowsAsNeeded(grid, colIndex, rowIndex + 1, newRemainder);
    }

    for (let i = colIndex; i < WIDTH; i++) {
      grid[verticalCursorPosition / 10][i] = "-";
    }
    return grid;
  }

  //TESTED: 11/20/24
  //looked over, could check 1 variable, 2 variable, 3 variable; on each line.  Because, I understood the
  //simple code, I just checked each row with three characters, first, middle, last.  Checked 5 tests for each row below.
  //first line (4) :  *
  //mid line (4) :    *
  //last line (4) :   *

  //1/22/25: looks okay
  pressedEnter(grid, rowIndex, colIndex, remainder, IsFirstTime, counter) {
    this.createRow(grid, rowIndex);
    this.divideNextRowsAsNeeded(grid, colIndex, rowIndex, [""]);
    //set for cursor on next line, first column
    //drawGrid(HEIGHT, WIDTH)
    horizontalCursorPosition = 0;
    verticalCursorPosition = verticalCursorPosition + 10;
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    return grid;
  }

  //11/22/24
  // top row:    *
  // middle row: *
  // last row:   *

  deleteAndPullCharacters(rowIndex, columnIndex, grid) {
    
    //On last row
    if (rowIndex > HEIGHT - 2) {
      
      let topRow = grid[rowIndex];
      let combine = [];//
      // if (columnIndex == -1) {
      //   let [topRowLeftCharacter, topRowRightSide] = this.splitAtIndex(
      //     topRow,
      //     1
      //   );
      //   combine = topRowRightSide;
      // } else if (columnIndex != 0) {
      //cursor is on any space except the first
      if(columnIndex != 0){
        let [topRowLeftOfColumn, topRowRightOfColumn] = this.splitAtIndex(
          topRow,
          columnIndex - 1
        );
        let [leftCharacterRightRow, topRowRightOfColumnWithoutFirstCharacter] =
          this.splitAtIndex(topRowRightOfColumn, 1);
          //is same, except first character is removed from dispaly 
          combine = [
          ...topRowLeftOfColumn,
          ...topRowRightOfColumnWithoutFirstCharacter,
        ];

      }
      //column index is on most left space - on last line, of course.
      else {
        //breaks row into to phrases
        let [topRowLeftOfColumn, topRowRightOfColumn] = this.splitAtIndex(
          topRow,
          columnIndex
        );
        //removes first character
        let [lastRowLeftChracterRemoved, lastRowRightSideAfterFirstColumn] =
          this.splitAtIndex(topRowRightOfColumn, 1);
        //row is without first character
        combine = [...lastRowRightSideAfterFirstColumn];
        //second to last row at right end is set as last rows first character
        //delete pulls a dash from end, and 2nd to last row right side is deleted
        grid[HEIGHT - 2][WIDTH - 1] = grid[HEIGHT - 1][0];
      }
      CursorMovements.cursorLeft()
      grid[rowIndex] = combine;
      //last character pulls a dash from end because there is a delete on this row 
      grid[HEIGHT - 1][WIDTH - 1] = "-";
      return grid;
    }




    //the following row code is anything except last row
    let topRow = grid[rowIndex];
    let bottomRow = grid[rowIndex + 1];
    let bottomRowLeftmostCharacter = bottomRow[0];
    
    let topLeftRow = [];
    let topRightRow = [];
    //cursor is on first column
    if (horizontalCursorPosition === 0) {
      //split at cursor - same as toprow
      [topLeftRow, topRightRow] = this.splitAtIndex(topRow, columnIndex);
    } else {
      //toprightrow holds character left of cursor
      [topLeftRow, topRightRow] = this.splitAtIndex(topRow, columnIndex - 1);
      
    }
    
    //remove front character from right hand side, this is the character being deleted
    let [leftOnecharacterDiscarded, topRightRowNoFirstCharacter] =
    this.splitAtIndex(topRightRow, 1);
    let combinedRow = [...topLeftRow, ...topRightRowNoFirstCharacter];


    //display both sides, without charactter
    
    // if (
    //   horizontalCursorPosition / 5 === 0 &&
    //   horizontalCursorPosition / 5 === columnIndex &&
    //   rowIndex != 0 &&
    //   rowIndex === verticalCursorPosition / 10
    // )
  
    //if on current row, first colum
    if(rowIndex != 0 && columnIndex === 0 && rowIndex == verticalCursorPosition/10)
    {
      //line above current row takes value from left hand side of bottom
      //isn't removing character form that row, row above 
      let character = grid[rowIndex][0];
      grid[rowIndex - 1][WIDTH - 1] = character;
    }

    //row index - combinerow is (width-1)-1
    grid[rowIndex] = combinedRow;

    //deleted, so move cursor left
    CursorMovements.cursorLeft()

    

    this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(
      //onto next row, the next top row is the row just after rowindex - 1 (see above) 
      rowIndex + 1,
      columnIndex,
      grid
    );
    //CursorMovements.cursorLeft()
    return grid;
    // }
  }

  //12/25/24: looks okay
  removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(
   
    rowIndex,
    columnIndex,
    grid
  ) {
    

    // bail, out
    if (rowIndex > HEIGHT - 1) {
      return grid;
    }

    //on last coulmn
    if (rowIndex > HEIGHT - 2) {
      let currentRow = grid[rowIndex - 1];
      let nextRow = grid[rowIndex];
      //remove first letters from both rows
      let [currentRowLeftCharacter, currentRowRightSideWithoutLeftChar] =
        this.splitAtIndex(currentRow, 1);
      let [nextRowLeftCharacter, nextRowRightSideWithoutLeftChar] =
       
      
      this.splitAtIndex(nextRow, 1);
      //put a charcter from next row, at end of this current row
     
      //row above last row
      let combineForCurrentRow = [
        ...currentRow,
        
        //????????????????NOT ARRAY?
        ...nextRowLeftCharacter,
      ];

      //same as currentrow
      grid[rowIndex - 1] = combineForCurrentRow;
      //pulls bottom rows left character into most right top row
      grid[rowIndex - 1][WIDTH - 1] = nextRowLeftCharacter;

      //build next row
      grid[rowIndex] = [...nextRowRightSideWithoutLeftChar];
      //on last line pulls a dash from at end character
      grid[rowIndex][WIDTH - 1] = "-";
      return grid;
    }
     //!!!!!!!!!


     //Not on last row...(all this!)
     //top row is without left most character, from deleteandpull...
    let topRow = grid[rowIndex - 1];
    //row after top row
    let bottomRow = grid[rowIndex];
    //get left most characeter, on bottomrow. Is put on most right side of row above it, top row.
    //drawGrid(HEIGHT, WIDTH)
    let leftCharacterofBottomRow =  bottomRow[0];
    //on bottommost and rightmost, so feed dash
    if (rowIndex == HEIGHT - 1) {
      leftCharacterofBottomRow = "-";
    }
    
    //split row - toprow is same as toprightmostcharacters
    let [topRowWithoutLeftCharacter, topRightMostCharacters] =
      this.splitAtIndex(topRow, 0);
    
    
      //remove the leftmost character on botto row
    const [BottomRowLeftCharacter, BottomRowWithoutLeftCharacter] =
      this.splitAtIndex(bottomRow, 1);
    //remove rightmost character of top row
    let [topRowWithoutFinalCharacter, topRightCharacterRemoved] =
      this.splitAtIndex(topRow, topRow.length - 1);

    // //runs each call with rowindex
    // if (
    //   horizontalCursorPosition / 5 === 0 &&
    //   horizontalCursorPosition / 5 === columnIndex &&
    //   rowIndex != 0 &&
    //   rowIndex - 1 === verticalCursorPosition / 10
    // ) {
      

      // //on leftmost character, not row zero 
      // if(rowIndex != 0 && rowIndex - 1 == verticalCursorPosition/10 && columnIndex == 0){
      // let newTopRow = [...topRightMostCharacters, ...leftCharacterofBottomRow];
      // grid[rowIndex - 1] = newTopRow;
      // drawGrid(HEIGHT, WIDTH);
      // this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(
       
      //   rowIndex + 1,
      //   columnIndex,
      //   grid
      // );
      // return grid;



      /////////////
      //      } else {


      //toprightmost...  is width - 1 characters ; toprow was shortened in previous deleteandpull...
      let newTopRow = [...topRightMostCharacters, ...leftCharacterofBottomRow];
      grid[rowIndex - 1] = newTopRow;
      //final character filled in, in next call
      grid[rowIndex] = [...BottomRowWithoutLeftCharacter];
    //recursion
    this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(
      
      rowIndex + 1,
      columnIndex,
      grid
    );
    return grid;
  }

  displayGridAndCursor() {
    ////drawGrid(HEIGHT, WIDTH)
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    //drawGrid(HEIGHT, WIDTH)
  }

  //?
  //change cursor position to next row if not on last row and column
  advanceHorizontalOneTime() {
    if (
      horizontalCursorPosition / 5 >= WIDTH - 1 &&
      verticalCursorPosition / 10 >= HEIGHT - 1
    ) {
      return;
    }
    if (horizontalCursorPosition >= (WIDTH - 1) * 5) {
      horizontalCursorPosition = 0;
      verticalCursorPosition = verticalCursorPosition + 10;
    } else {
      horizontalCursorPosition = horizontalCursorPosition + 5;
    }
  }

  //TESTING : 11/19/24: For debugging, right hand side values move to first left.  All othher values move one to right.
  //if right hand value is empty, insert stops at that line.

  //sporadic testing, see above.  More complicated arrangements.
  //FIRST LINE
  //row 1:
  //one character:     *
  //two: characters:   *
  //three: characters: *
  //row 2:
  //one character:     *
  //two: characters:   *
  //three: characters: *
  //row3
  //one character:     *
  //two: characters:   *
  //three: characters: *

  //MIDDLE LINES
  //row 1:
  //one character:     *
  //two: characters:   *
  //three: characters: *
  //row2
  //one character:     *
  //two: characters:   *
  //three: characters: *
  //with row3
  //one character:     *
  //two: characters:   *
  //three: characters: *

  //LAST LINES
  //row 1:
  //one character:     *
  //two: characters:   *
  //three: characters: *
  //row2
  //one character:     *
  //two: characters:   *
  //three: characters: *
  //row3
  //one character:     !
  //two: characters:   !
  //three: characters: !
  //

  //!!!!CONSIDER PROBABLY CODE DOWN BELOW
  //1/28/25
  initialInsertDoThisFirst(rowIndex, colIndex, grid, leftOverChar, fromIndex) {
    
    drawGrid(HEIGHT, WIDTH)
    
    if (rowIndex > HEIGHT - 1) {
    return grid;
    }

    //for displaying
    let horizString = (horizontalCursorPosition / 5).toString();
    let vertString = (verticalCursorPosition / 10).toString();
    this.checkOnLastLineSoCreateRow = true;
    if(fromIndex){
      this.createRow(grid, leftOverChar, rowIndex, colIndex);
    }
    //these are the two rows we are using
    let topRow = grid[rowIndex];
    let lowerRow = grid[rowIndex + 1];
    
    //get both sides of row, broken at cursor
    let [leftTopRow, rightTopRow] = this.splitAtIndex(topRow, colIndex);
    let combineTopRow = []
    //this function run is from the call at index, not a recursive call!
    if (fromIndex){
    //insert character at index
    //leftovervhar is the character being inserted (from index)
    combineTopRow = [...leftTopRow, ...leftOverChar,  ...rightTopRow];
    if(verticalCursorPosition/10 == rowIndex){
      CursorMovements.cursorRight();
    }
    }else{
      //leftoverchar is now remiander, so it is added to the fromt
    combineTopRow = [...leftOverChar, ...leftTopRow,  ...rightTopRow];
    if(verticalCursorPosition/10 == rowIndex){
      CursorMovements.cursorRight();
    }
   
  }
    //get the firstt row of characters and the remiander to pass into the recursion
    let [finishedTopRow, leftOver] = this.splitAtIndex(combineTopRow, WIDTH);
    //set row
    grid[rowIndex] = finishedTopRow;

    //call for next row
    this.initialInsertDoThisFirst(rowIndex+1, colIndex, grid, leftOver, false) 
    return grid;
  }



  checkOnLastLineSoCreateRow(grid, leftOverChar, rowIndex, colIndex) {
    //!!!!THIS VARIABLE IS NOT DEFINED OR USED ELSEWHERE!!!!!
    if (
      grid[HEIGHT - 1][WIDTH - 1] != "-" &&
      this.AfterCursorAllRowsHaveNoDash
    ) {
      //} && rowIndex == HEIGHT-1){
      this.createRow(grid, rowIndex);
    }
    return grid;
  }

  
}
