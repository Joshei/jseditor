//pushWordsDoThisSecond, SHOULD BE OKAY, CHECK.  READ CODE TOMORROW.  
//NEXT SESSION, TEST FOR pushWordsDoThisSecond RECURSION, AND THERE IS A DIFFERENT VERSION ON GITHUB TOO
//THIS VERSION FITS THE CODE IN A LOWER LEFT HAND SLOT.
//THE GITHUB VERSION PUSHES TEXT INTO NEXT LINE.
//USE BOTH
//ANY PROBLEMS, USE VERSION: CURSORS.

//8/26/24 (5:22 PM): insert and pushrow looking good.  PushWord next.  React/css tomorrow.
class RecursiveClass {
  constructor() {
  this.counterOfRows = 0
  this.CursorOnLastColumn = false
  this.lastRowIndexToPushOn = -1
  this.checkOnLastLineSoCreateRow = false
  this.bottomRow = -1
  this.bottomRowFromLastRound = []
  this.characterMovedToBottom = ""
  this.tracksRow = 0;
  this.hasBeenInZeroHorizPosition = false;
}

  deleteRow(arr, rowNumber) 
  {
      arr.splice(rowNumber, 1);
      return arr;
  }


    createRow(grid, rowIndex) {
    //remove last line, which is exclamation marks
    //this.deleteRow(grid, rowIndex+1) 
    //add a new row of nulls
    
    grid.push(["-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-","-", "-", "-", "-", "-", "-" , "-" ]),
    
    //add exclamation marks at end again, which is for padding
    //grid.push(["!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!","!", "!", "!", "!", "!" , "!" ]),
    //important, allows new line to display in the drawgrid
    HEIGHT++ 
    //drawGrid(HEIGHT, WIDTH)
    return grid
    
  }

  getLastSpaceOrNull(grid ,topRow){

  //get left phrase before last dash
  //checks for either space or dash, whichever is less characters
  let lastIndexOfNullOnTopRow = topRow.lastIndexOf("-");
  let lastIndexOfSpaceOnTopRow = topRow.lastIndexOf(" ");
  let maxIndexOfNullOrString = 0
  if(lastIndexOfSpaceOnTopRow >= lastIndexOfNullOnTopRow){
    maxIndexOfNullOrString = lastIndexOfSpaceOnTopRow
  }else{
    //choose space or null character that is farthest right on row
    maxIndexOfNullOrString = lastIndexOfNullOnTopRow
  }
  if (maxIndexOfNullOrString === -1){
    return grid
  }
  //gets the word after dash or spacew
  const [left, rightWordAtEndOfRowOne] = this.splitAtIndex(topRow, maxIndexOfNullOrString+1);
  return {leftSide: left, rightSide: rightWordAtEndOfRowOne}
}


placeCharacterWithoutInsertDoThisFirst(rowIndex, colIndex, grid, character){
   grid[rowIndex][colIndex] = character;
   return grid
}
deleteCharacterWithoutPull(rowIndex, colIndex, grid, character){
  grid[rowIndex][colIndex] = "-";
  return grid
}

//ths is for when two letter are entered on last column (pushes to next row)
//THIS IS CALLED TWICE, COULD WORK
//CONSIDER ADPATING CODE INSTAED ; LOOK AT MORE THAN HEIGHT-2 IN pushWordsDoThisSecond
//CAUSES AT LEAST ONE INDEXING ERROR
//READING LENGTH ERROR

//WILL THE LAST LINE ALWAYS BE EMPTY HERE?
lastLineWorkings(grid, rowIndex){

  let topRow = grid[rowIndex-1];
  let bottomRow =grid[rowIndex];
  //return grid
  let lastIndexOfNullOnTopRow = topRow.lastIndexOf("-");
  //get top right word
  const [leftOfWordTopRow, rightWordTopRow] = this.splitAtIndex(topRow, lastIndexOfNullOnTopRow+1)
  //get left word for bottom
  const firstIndexOfNullOnBottomRow = bottomRow.indexOf("-");
  const [leftWordBottomRow, rightSide] = this.splitAtIndex(bottomRow, firstIndexOfNullOnBottomRow)
  const combine = [...rightWordTopRow, ...leftWordBottomRow]
  grid[rowIndex] = combine
  horizontalCursorPosition = combine.length * 5
  //cover rest of bottom row with dashes (after word from top)
  for(let i = combine.length; i < WIDTH; i++ ){
  grid[rowIndex][i] = "-"
   }
   //verticalCursorPosition = verticalCursorPosition + 10
   //cover top row where word was, with dashes
   for(let i = WIDTH - rightWordTopRow.length; i < WIDTH; i++ ){
    grid[rowIndex-1][i] = "-"
     }

   return grid
}

  //12/22/24
  pushWordsDoThisSecond(grid, newRemainder, rowIndex, fromIndex)
  {

    //for putting cursor on row 2 for lefthand words greater than 2
    let TwoOrMoreCharactersAtRightWordAtRowOne = false
    
    if(rowIndex > HEIGHT - 1){
      return grid
    }
    
    if(rowIndex === HEIGHT-1 && grid[HEIGHT-1][WIDTH-1] != "-"){
      //looki (toprow)ng if there is a character of bottom row, if so just lowest row create a row and continue with push
      if(grid[HEIGHT-1][WIDTH-1] != DASH ){
      this.createRow(grid, rowIndex)
     
      horizontalCursorPosition = horizontalCursorPosition + 5 
      //drawGrid(HEIGHT, WIDTH)
      
      }
    }
    //There was conditions here for access, on previous versions - 12/21/24
    let holdthis = rowIndex+1
    let wasVariablegridCheck = []
    let wordAtEndOfRowOne = []
    let topRow = grid[rowIndex-1];
    let bottomRow =grid[rowIndex];
    let characterCounter = 0
    //has no row above it
    if(rowIndex == 0){
      this.pushWordsDoThisSecond(grid, [""], rowIndex+1, false)
        return grid
    }
    let holder = this.getLastSpaceOrNull(grid,topRow)
    wasVariablegridCheck = holder.leftSide
    wordAtEndOfRowOne = holder.rightSide
    
    let lengthOfRightWordAtRowOne = wordAtEndOfRowOne.length
    if(lengthOfRightWordAtRowOne >= 2){
      TwoOrMoreCharactersAtRightWordAtRowOne = true
    }

    //On last line, this as well as above it has no dashes on both sides
    if(rowIndex != 0 && grid[rowIndex][0] != "-"  && grid[rowIndex-1][WIDTH-1] != "-" && rowIndex === HEIGHT-1){
      this.lastLineWorkings(grid, rowIndex)
      console.log("here")
    }
    //On last line, just top has a character on right edge, bottom has a dash, from above condition
    else if (rowIndex != 0 && grid[rowIndex - 1][WIDTH-1] != "-" && rowIndex === HEIGHT-1 ){
        horizontalCursorPosition = 0;
        verticalCursorPosition = verticalCursorPosition + 10;
      } 

    let firstIndexOfNullOnBottomRow = bottomRow.indexOf("-");
    let firstIndexOfSpaceOnBottomRow = bottomRow.indexOf(" ");
    
    //first index is set to last character of row
    if(firstIndexOfNullOnBottomRow === -1){
      firstIndexOfNullOnBottomRow = 27
    }

    if(firstIndexOfSpaceOnBottomRow === -1){
      firstIndexOfSpaceOnBottomRow = 27
    }
    let lastIndexOfFirstWord = 0
    //choose space or null character that is farthest right on row
    if(firstIndexOfSpaceOnBottomRow < firstIndexOfNullOnBottomRow){
    lastIndexOfFirstWord = firstIndexOfSpaceOnBottomRow 
    }else{
    lastIndexOfFirstWord = firstIndexOfNullOnBottomRow 
    }
    const [firstWordBottomRow, indexAfterLeftWordBottomRow] = this.splitAtIndex(bottomRow, lastIndexOfFirstWord);
    let lastIndexOffirstWordBottomRow = firstWordBottomRow.length
    //important setting
    let LengthOfNullsAndSpacesAfterFirstLeftMostCharacter = 0
    //because this code does not have a row below it, it is bottom row
    if(rowIndex != HEIGHT-1){

    for(let i =  lastIndexOffirstWordBottomRow ; i <WIDTH-1 ; i++){
      //if (grid[rowIndex+2][i] != "-" &&  grid[rowIndex+2][i] != " ")
      if (grid[rowIndex][i] != "-" )
      {
            break
      }
      LengthOfNullsAndSpacesAfterFirstLeftMostCharacter++
     }
    }
    
     //no space, so ju (toprow)st lowest row do next row with recursion
     if(LengthOfNullsAndSpacesAfterFirstLeftMostCharacter === 0){
      this.pushWordsDoThisSecond(grid, [""], rowIndex+1, false)
      return grid
     }
    //will word fit below in the spaces and nulls that are before the next real character
    if(lengthOfRightWordAtRowOne < LengthOfNullsAndSpacesAfterFirstLeftMostCharacter && 
      //
      // WHAT IF WORD HAS NO LENGTH
      //
      lengthOfRightWordAtRowOne > 0){
      let combined = []

     const [removeThis, charactersAfterLeftWordOnBottomRow] = this.splitAtIndex(indexAfterLeftWordBottomRow, lengthOfRightWordAtRowOne );
    //put row together
    combined = [...wordAtEndOfRowOne, ...firstWordBottomRow, ...charactersAfterLeftWordOnBottomRow]
    let lengthOfFirstWordBottomRow = firstWordBottomRow.length
    //get remainder for next recursive call - this is one rows worth
    const [newBottomRow, newRemainder] = this.splitAtIndex(combined, WIDTH);
    
    //if either row above or present has a dash on ends than don't change the grid
    if((verticalCursorPosition/10 > 0) && (grid[rowIndex-1][WIDTH-1] === "-"  ) || (grid[rowIndex][0]) === "-") { //|| !(firstWordBottomRow)){

       this.pushWordsDoThisSecond(grid, [""], rowIndex+1, false)
       return grid

     }
     //Finally, set the row.
    grid[rowIndex] = newBottomRow
   //fill in moved text space with dashes on top row
   for(let i =  WIDTH - lengthOfRightWordAtRowOne ; i < WIDTH ; i++){
    grid[rowIndex-1][i] = '-'
   }
  //!BELOW IS CURSOR ADJUSTMENT!
  //!!!!!
  if(lengthOfRightWordAtRowOne > LengthOfNullsAndSpacesAfterFirstLeftMostCharacter && lengthOfRightWordAtRowOne != 0 && lengthOfRightWordAtRowOne != -1){

    horizontalCursorPosition = 10
    
  }

  //when 
  //ready to move to slot below
  if( TwoOrMoreCharactersAtRightWordAtRowOne ){
  horizontalCursorPosition = 0
  horizontalCursorPosition = horizontalCursorPosition = ((lengthOfRightWordAtRowOne + 1) * 5)
  //verticalCursorPosition = verticalCursorPosition + 10
 
  }
  TwoOrMoreCharactersAtRightWordAtRowOne = false;
  this.pushWordsDoThisSecond(grid, newRemainder, rowIndex+1, false)

return grid  
}//ends fits in left hand slot

//doesn't fit in slot
else{
  //!!!LOOK INTO THIS!
  if(this.characterMovedToBottom){
    horizontalCursorPosition = 5
  }
  this.characterMovedToBottom = ""
}
  
this.pushWordsDoThisSecond(grid, [""], rowIndex+1, false)
return grid
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
divideFirstRowAsNeeded(grid, colIndex, rowIndex){
let topRow = grid[rowIndex]
let [leftTopRow, rightTopRow] = this.splitAtIndex(
    topRow,
    colIndex
);
grid[rowIndex] = leftTopRow
grid[rowIndex+1] = rightTopRow
//make all dashes
let leftTopRowLength = leftTopRow.length
if(leftTopRowLength === 0){
 grid[rowIndex] =  [DASH, DASH , DASH, DASH, DASH, DASH, DASH , DASH, DASH, DASH, DASH, DASH, DASH, DASH , DASH, DASH, DASH, DASH, DASH, DASH, DASH , DASH,DASH, DASH, DASH, DASH, DASH, DASH , DASH ]
   
}else{
  for(let i = leftTopRowLength; i < WIDTH; i++){
    grid[rowIndex][i] = '-'
 }
  for(let i = WIDTH - leftTopRowLength ; i < WIDTH; i++){
    grid[rowIndex+1][i] = '-'
  }
}
return grid
}

///TRYING ENTER, LOOK AT RIGHT END POINTS AND OTHERWISE TEST.


//12/23/24
divideNextRowsAsNeeded(grid, colIndex, rowIndex, remainder){
  
  this.tracksRow++;
  //if(rowIndex > HEIGHT-1){
  //  return grid
  //}
  let bottomRow = grid[rowIndex]
  let topRow = grid[rowIndex+1]
  //let oneRowsWorth = []
  
  //Every runt hrough 
  //gets right hand side

  //taking the rigth top row and adhering it in front of next bottom row, pushes row right
  //loop
  //remove right end and adhere again
  let [bottomLeftRow, BottomRightRow] = this.splitAtIndex(  bottomRow, colIndex);

 
  if (rowIndex > HEIGHT-2){

    grid[rowIndex] = BottomRightRow 
    for (let i = BottomRightRow.length ; i < WIDTH ; i++ ){
    grid[rowIndex][i] = "Z"

    }
    drawGrid(HEIGHT, WIDTH)
    return grid
  }
  else{
    //splits top in to at cursor
    let [leftTopRow, rightTopRow] = this.splitAtIndex(  topRow, colIndex);
  
  let buildNextRow = ""
  //happens on first loop
  if(remainder == ""){
    //sets this to upper-lines right side and the entire lower
    buildNextRow = [...BottomRightRow, ...topRow ]
  }
  else{

    //For example: 24 characters from right are added first time through (colindex = 4), there are an additional 28 characters added, so there are 52 chartacters. Each time looped a (lower) row of columns of 28 characters are added  and  a row is taken off the front by width, leaving the remainder that is always 24, and the intial amount of characters stays the same.  The WIDTH is taken from the front.  The row is added at the end.  So the characters shift, always taken using LIFO -  last in, fist in. 
    //remainder will always br 24 (colindex = 4), and top is always 28.

    //or more succint:
    //add extra characters than repeat: put on and take off a row  - LIFO.  "last in first out"
    buildNextRow = [...remainder, ...topRow ]

  }
  
  const [oneRowsWorth, newRemainder] = this.splitAtIndex(buildNextRow, WIDTH)
  grid[rowIndex+1] = oneRowsWorth 
  drawGrid(HEIGHT, WIDTH)
  //puts extra in remainder - starts at loop 1
  this.divideNextRowsAsNeeded(grid, colIndex, rowIndex+1, newRemainder)
 

}

for(let i = colIndex; i < WIDTH ; i++){
  grid[verticalCursorPosition/10][i] = "Q"
}
return grid
}

  //TESTED: 11/20/24
  //looked over, could check 1 variable, 2 variable, 3 variable; on each line.  Because, I understood the 
  //simple code, I just checked each row with three characters, first, middle, last.  Checked 5 tests for each row below.
  //first line (4) :  *
  //mid line (4) :    *    
  //last line (4) :   *
  

  //12/25/24: looks okay
  pressedEnter(
    grid,
    rowIndex,
    colIndex,
    remainder,
    IsFirstTime,
    counter
    ) {
      this.createRow(grid, rowIndex)
      this.divideNextRowsAsNeeded(grid, colIndex, rowIndex, [""])
    //set for cursor on next line, first column
    //drawGrid(HEIGHT, WIDTH)
    horizontalCursorPosition = 0
    verticalCursorPosition = verticalCursorPosition + 10
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
  




  deleteAndPullCharacters(remainder, rowIndex, columnIndex,  grid) {
    
    //On last row
    if(rowIndex > HEIGHT - 2){
    let topRow = grid[rowIndex]
    let combine = []
    if(columnIndex == -1){
    let [topRowLeftCharacter, topRowRightSide] = this.splitAtIndex(topRow, 1) ;
    combine = topRowRightSide
     }
  else if (columnIndex != 0){
      let [topRowLeftOfColumn, topRowRightOfColumn] = this.splitAtIndex(topRow, columnIndex - 1) ;
      let [leftCharacterRightRow, topRowRightOfColumnWithoutFirstCharacter] = this.splitAtIndex(topRowRightOfColumn, 1) ;
      combine = [...topRowLeftOfColumn, ...topRowRightOfColumnWithoutFirstCharacter]
      
      CursorMovements.cursorLeft()
  }
  //column index is on most left space - on last line, of course.
  else{
    //!delete last column, above row
    //put bottom left character on top-right\
    let [topRowLeftOfColumn, topRowRightOfColumn] = this.splitAtIndex(topRow, columnIndex);
    //topRowRightOfColumn - remove first character
    let [lastRowLeftChracterRemoved , lastRowRightSideAfterFirstColumn] = this.splitAtIndex(topRowRightOfColumn, 1);
    combine = [...lastRowRightSideAfterFirstColumn]
    CursorMovements.cursorLeft()
    grid[verticalCursorPosition/10][horizontalCursorPosition/5]= "P" 
    }

    grid[rowIndex] = combine
    grid[HEIGHT-1][WIDTH-1] = "Z"
    return grid
    }

    if (rowIndex > HEIGHT-3){
      let topRow = grid[rowIndex]
      let bottomRow = grid[rowIndex+1]
      let combine = []
      let [topRowLeftOfColumn, topRowRightOfColumn] = this.splitAtIndex(topRow, columnIndex) ;
      let [leftCharacterRightRow, topRowRightOfColumnWithoutFirstCharacter] = this.splitAtIndex(topRowRightOfColumn, 1) ;
      combine = [...topRowLeftOfColumn, ...topRowRightOfColumnWithoutFirstCharacter]
      grid[rowIndex] = combine
      grid[rowIndex][WIDTH-1] = grid[rowIndex+1][0]
      let [bottomRowLeftCharacter, bottomRowRightSide] = this.splitAtIndex(bottomRow, 1) ;
      grid[rowIndex+1] = bottomRowRightSide
      grid[rowIndex+1][WIDTH-1] = "-"
      //drawGrid(HEIGHT, WIDTH)
      return grid
    }
    let counterOfUsedRows = 0
    let rowIndexInLoop = rowIndex
    let topRow = grid[rowIndex]
    counterOfUsedRows = 0
    //determine how many rows of code with non null right side
    while(true){
      //now on last row so just lowest row  (toprow)leave
      if(rowIndexInLoop == HEIGHT){
        break
      }
      if(grid[rowIndexInLoop][WIDTH-1] != "-")
      {
        //counts rows, and incrememtns row index
        rowIndexInLoop++
        counterOfUsedRows++
      }
      else{
        break
      }
    }
   //row under top row
  topRow = grid[rowIndex]
  let bottomRow = grid[rowIndex+1]
  let bottomRowLeftmostCharacter = bottomRow[0]
  //take left most character from top row
  //!!!!!----!!!!!
  //let [frontCharactersTopRow, topWithoutFrontCharacters] = this.splitAtIndex(topRow, columnIndex+1) ;

  let [topLeftRow, topRightRow] = this.splitAtIndex(topRow, columnIndex) ;
  //remove front character from right hand side
  let [left, topRightRowNoFirstCharacter] = this.splitAtIndex(topRightRow, 1) ;
  let combine2 = [...topRightRowNoFirstCharacter, ...topLeftRow]

  grid[rowIndex] = combine2
  //get character on next (bottom) row, first column
  //let [bottomLeftmostCharacter, bottomRowExceptFirstChar] = this.splitAtIndex(bottomRow, 2) ;
  let [bottomLeftSideBeforeColumnAmt, bottomRightSideBeforeColumnAmt] = this.splitAtIndex(bottomRow, columnIndex + 1) ;
  //let [left, right] = this.splitAtIndex(frontCharactersTopRow, 1) ;
  //creates top row using first character from next row

  //take frontcharacterstoprow and remove rightmost character
  //let [frontCharactersTopRowLessFrontChar, right] = this.splitAtIndex(frontCharactersTopRow, ((frontCharactersTopRow.length)+1)) ;
  let higherCombine = [...topRightRowNoFirstCharacter, ...bottomLeftSideBeforeColumnAmt ]
  //let Abovecombine = [...topLeftRow]
  for(let i = higherCombine.length ; i< WIDTH ; i++){
    //grid[rowIndex][i] = "V"
  }
  grid[rowIndex] = higherCombine
  
 
  /////////////////////////////   CODE FOR DELETE ON HORIZONTAL POSITION ZERO
  

  
  // if (horizontalCursorPosition/5 === 0){

  //   let bottomRow = grid[rowIndex]
  //   //strip off front character
  //   //get leftmost character
  //   //replace right most character with left lower character
  //   ////grid[rowIndex-1][WIDTH-1] = grid[rowIndex][0]
  //   //remove left most character
  //   //let [left, right] = this.splitAtIndex(frontCharactersTopRow, (frontCharactersTopRow.length)-1) ;
  //   //let combine2 = [...frontCharactersTopRowLessFrontChar, ...bottomRow]
  //   //let [newRow, remainder] = this.splitAtIndex(combine2, (WIDTH-1)) ;
    
  //   //grid[rowIndex] = newRow

  //   //deletes last character row above, and puts cursor there    this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(counterOfUsedRows, rowIndex-1, columnIndex, grid)
  //   ////Primary call.

    
  //   //this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(counterOfUsedRows, rowIndex - 2, columnIndex, grid)
  //   this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(counterOfUsedRows, rowIndex, columnIndex, grid)
  //   return grid
  // }

//////////////////////////////////////


  //set rowindex to none at funciton param,eters and set in function too.

  
  
  CursorMovements.cursorLeft()
  //Primary call.
  //this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(counterOfUsedRows, rowIndex+1, columnIndex, grid)
  //CursorMovements.cursorLeft()
  return grid
  // }

}


  //12/25/24: looks okay
  removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(amtOfUsedRows, rowIndex, columnIndex, grid){

    //return grid
    // if(rowIndex === -2 && columnIndex === 0){
    //   return grid
    // }
    // if(rowIndex > HEIGHT-2){

    //   return grid;
    // }


    if (rowIndex > HEIGHT-1){

      return grid

    }

    
    //
    // return grid
    //counter is used to check for proper amount of lines to be run
    this.counterOfRows++
    // 12
    if (rowIndex > HEIGHT-2){
      let currentRow = grid[rowIndex - 1]
      let nextRow = grid[rowIndex]
      //remove first letters from both rows
      let [currentRowLeftCharacter, currentRowRightSideWithoutLeftChar] = this.splitAtIndex(currentRow, 1) ;
      let [nextRowLeftCharacter, nextRowRightSideWithoutLeftChar] = this.splitAtIndex(nextRow, 1) ;
      //put a charcter from next row, at end of this current row
      
      //build row
      let combineForCurrentRow = [...currentRowRightSideWithoutLeftChar, currentRowLeftCharacter]
      grid[rowIndex-1] = combineForCurrentRow;
      grid[rowIndex-1][WIDTH-1] = nextRowLeftCharacter
      
      //build next row
      grid[rowIndex] = [...nextRowRightSideWithoutLeftChar]
      grid[rowIndex][WIDTH-1] = "-"
      return grid
    }

    let topRow = grid[rowIndex-1]
    //row after top row
    let bottomRow = grid[rowIndex]
    //get left most characeter, on bottomrow. Is put on most right side of row above it, top row.
    //drawGrid(HEIGHT, WIDTH)
    let leftCharacterofBottomRow = bottomRow[0]
    //on final row (toprow) and was a deletion so just lowest row append a null character to end
    if(rowIndex == HEIGHT-1){
      leftCharacterofBottomRow = "-"
    }
    //get top row without lelft most character
    //let [topLeftmostCharacter, topRowWithoutLeftCharacter] = this.splitAtIndex(topRow, WIDTH-2) ;
    
    //remove
    let [topRowWithoutLeftCharacter, topRightMostCharacters] = this.splitAtIndex(topRow, 1) ;
   //recreate the top with the next row's left character, if last row replace last character with null.
    const [BottomRowLeftCharacter, BottomRowWithoutLeftCharacter] = this.splitAtIndex(bottomRow, 1)
    //let [removedFirstCharTopRow, topRowWithoutFirstChar] = this.splitAtIndex(bottomRow, 1) ;
    let [topRowWithoutFinalCharacter, topRightCharacterRemoved] = this.splitAtIndex(topRow, topRow.length-1) ;
    
///////////
      //runs each call with rowindex
     if(horizontalCursorPosition/5  === 0 && horizontalCursorPosition/5 === columnIndex && rowIndex != 0  && rowIndex === verticalCursorPosition/10){

      // let topRow = grid[rowIndex-1]
      // //row after top row
      // let bottomRow = grid[rowIndex]
      // //let newTopRow = [...topRightMostCharacters, ...leftCharacterofBottomRow]
      // let [topRowFirstChar, topRowWithoutWithoutFirstCharacter] = this.splitAtIndex(topRow, 1)
      // this.hasBeenInZeroHorizPosition = true;
      //let [topRowWithoutFinalCharacter, topRightCharacterRemoved] = this.splitAtIndex(topRow, topRow.length-1) ;
      let newTopRow = [...topRowWithoutFinalCharacter, ...leftCharacterofBottomRow]
      grid[rowIndex-1] = newTopRow
      drawGrid(HEIGHT, WIDTH)
      this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(amtOfUsedRows, rowIndex+1, columnIndex,  grid)
      return grid

/////////////
     }else{
    //remove last char from toprow put in newtoprow
    //this is for character not on leftmost character
    let newTopRow = [...topRightMostCharacters, ...leftCharacterofBottomRow]
    //let newTopRow = [...topRightMostCharacters]
    grid[rowIndex-1] = newTopRow
     }
    //tail end recursion, runs until end of rows, or dash is encountered after number of rows
    //Secondary call.
    this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(amtOfUsedRows, rowIndex+1, columnIndex,  grid)
    //rest this global value, for use next time
    this.counterOfRows = 0
    return grid
    
 }

  displayGridAndCursor(){
  ////drawGrid(HEIGHT, WIDTH)
  drawCursor(
    horizontalCursorPosition + HOFFSET,
    verticalCursorPosition + VOFFSET)
    //drawGrid(HEIGHT, WIDTH)
  }




  //?
  //change cursor position to next row if not on last row and column
  advanceHorizontalOneTime(){
  if(horizontalCursorPosition/5 >= WIDTH-1  && verticalCursorPosition/10 >= HEIGHT-1)
  {
        return
  }
  if (horizontalCursorPosition >= (WIDTH-1)*5){
    horizontalCursorPosition = 0
    verticalCursorPosition = verticalCursorPosition + 10
  }else{
    horizontalCursorPosition = horizontalCursorPosition + 5
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
      initialInsertDoThisFirst(rowIndex, colIndex, grid, leftOverChar){
      //checks if dash at end of current row, used for prevention of continuation on other rows
      let IsADash = false
       //just on first top statement
       if(grid[rowIndex][WIDTH-1] === "-"){
        IsADash = true 
        }
      //for displaying
      let horizString =  (horizontalCursorPosition/5).toString()
      let vertString = (verticalCursorPosition/10).toString() 
      //let a = document.getElementById("xAndY")
      //a.innerHTML = 'Horizontal' + horizString + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + 'Vertical: '+ vertString
      this.checkOnLastLineSoCreateRow = true;
      //from row now to end of each row, check for dash throug ending row
      //if dash, than each line will not be pushed dow
      for(let i = verticalCursorPosition/10; i < HEIGHT; i++){
        if (grid[i][WIDTH-1] === "-"){
        this.checkOnLastLineSoCreateRow = false;
        break
        }
      }
      if(  this.checkOnLastLineSoCreateRow === true){
        
        this.createRow(grid, leftOverChar, rowIndex, colIndex)
        
      }
      if(rowIndex > HEIGHT -1){
        return grid
      }
      //these are the two lines we are using
      let topRow = grid[rowIndex];
      let lowerRow = grid[rowIndex+1]
      //splits array apart at insertion point
      
     // colIndex = colIndex + 1;
     
      CursorMovements.cursorRight()

      let [leftTopRow, rightTopRow] = this.splitAtIndex(topRow, (colIndex))


      //insert character at index
      let combineTopRow = [...leftTopRow, ...leftOverChar, ...rightTopRow]
      //this is one row, exactly, because of WIDTH
      


     
      //CursorMovements.cursorRight()
      
      let [finishedTopRow, leftOver] = this.splitAtIndex(combineTopRow, WIDTH)
      //there is a character on last row, do call function which is recursive
      //if (grid[rowIndex][WIDTH-1] != DASH)
        
        //push rows right because of insert
        grid[rowIndex] = finishedTopRow


        /////////////////////FOR pushWordsDoThisSecond

        //???LOOK AT THIS - checks character on left for cursor positioning???
        if(horizontalCursorPosition/5 === WIDTH-1){
          this.CursorOnLastColumn = true
        }
        
        //!!!!!Possibly incorporate this with pushWordsDoThisSecond setting a variable: lastRowIndexToPush; or maybe a function call here 
        //if(grid[rowIndex][WIDTH-1] === "-" && this.lastRowIndexToPushOn === -1 && rowIndex > horizontalCursorPosition/5){
        if(grid[rowIndex][WIDTH-1] === "-" || grid[rowIndex+1] === "-"){

        }else{

        } 
        // WAS DASH AT FIRST LINE OF INSERT'S END
       if (IsADash === true){ 
        return grid
       }

      
        //this.pushRowRight(rowIndex+1, colIndex, grid, leftOver)
        //On zero, because there will be a cursorright
        
        //THIS PROBABLY SHOULD BE USED:
        //if(horizontalCursorPosition/5-1 === 0){
        //  //used for setting  cursor
        //  this.CursorOnLastColumn = true
        //}

        //CursorMovements.cursorRight()
        return grid    
    }



checkOnLastLineSoCreateRow(grid, leftOverChar, rowIndex, colIndex){
   
  //!!!!THIS VARIABLE IS NOT DEFINED OR USED ELSEWHERE!!!!!
  if (grid[HEIGHT-1][WIDTH-1] != "-" && this.AfterCursorAllRowsHaveNoDash){//} && rowIndex == HEIGHT-1){
    this.createRow(grid, rowIndex)
  }
  return grid
}



//11/23/24 - looks good - SEE CHECK THIS
//stops inserting when last character is a dash!
pushRowRight(rowIndex, colIndex, grid, leftOverChar){

  //in pushword, in increase verticalcursorposition back 10
  
  //verticalCursorPosition = 0
  //horizontalCursorPosition = 0
  //verticalCursorPosition = verticalCursorPosition + 10
  //horizontalCursorPosition = horizontalCursorPosition+10
  if(rowIndex > HEIGHT -1){
    
    return grid
  }
  //two rows were using for push
  //let topRow = grid[(rowIndex-1)];
  let lowerRow = grid[rowIndex]
  let combineToBottomRow = []
  //if not a dash on last row end, than add that character on start of next line
  if (leftOverChar === "-"){
    combineToBottomRow = [...lowerRow]
  }else{
    combineToBottomRow = [...leftOverChar, ...lowerRow]
  }
  //one row, exactly, because of WIDTH, left over characters become remainder
  //for next call
  let [bottomRowReady, remainingChars] = this.splitAtIndex(combineToBottomRow, WIDTH)
  //let [left, remainingChars] = this.splitAtIndex(remainingChars, WIDTH)
  grid[rowIndex] = bottomRowReady
  if(grid[rowIndex][0] != "-"){
    this.characterMovedToBottom = grid[rowIndex][0] 
  }
  
  //!!!!!!!!!!CHECK THIS!!!!!!!!!!
  if(grid[rowIndex][WIDTH-1] === "-"){//} && remainingChars === "" || remainingChars == [""] ){
    return grid
  }
    //drawGrid(HEIGHT, WIDTH)
    //push next row to right(one position)  recursion
    
    this.pushRowRight(rowIndex+1, 0, grid, remainingChars)
    
    
    return grid
  }
}





