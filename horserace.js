var horsePicture = 'data:image/png;base64,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';
var horsePictureSize = 32;
var minimalRacersNumber = 2;
var minIntervalTime = 250;
var maxIntervalTime = 500;
/**
 * Static util class for HTML manipulation.
 */
var HtmlDrawerUtils = (function () {
    function HtmlDrawerUtils() {
    }
    /**
     * Create a button element.
     *
     * @param innerText The button text
     * @param isEnabled The button enabled property
     * @param func The onClick function of button
     * @returns {HTMLButtonElement} The button instance
     */
    HtmlDrawerUtils.createButton = function (innerText, isEnabled, func) {
        var resultButton = document.createElement('button');
        resultButton.innerText = innerText;
        resultButton.onclick = func;
        resultButton.disabled = !isEnabled;
        return resultButton;
    };
    /**
     * Controls buttons visibility.
     *
     * @param button The button element
     * @param isEnabled Is enabled property
     */
    HtmlDrawerUtils.controlButton = function (button, isEnabled) {
        button.disabled = !isEnabled;
    };
    /**
     * Create the racers name div section.
     *
     * @returns {HTMLDivElement} A div element filled with the racers names
     */
    HtmlDrawerUtils.createRacersNameDiv = function (racersName) {
        var racersNameDivResult = document.createElement('div');
        racersNameDivResult.innerText = 'The racers are: ';
        racersName.forEach(function (name) {
            racersNameDivResult.innerText += name;
        });
        return racersNameDivResult;
    };
    /**
     * Create the count down timer's div.
     *
     * @param countDownCounter The timer start number
     * @returns {HTMLDivElement} The div element instance
     */
    HtmlDrawerUtils.createCountDownDiv = function (countDownCounter) {
        var countDownDivResult = document.createElement('div');
        countDownDivResult.innerText = "Count down to start: " + countDownCounter;
        return countDownDivResult;
    };
    /**
     * Create horse div.
     *
     * @param fieldLength The div length
     * @param horse The horse for the div
     * @returns {HTMLTableRowElement} The element instance
     */
    HtmlDrawerUtils.buildHorseField = function (fieldLength, horse) {
        var result = document.createElement('tr');
        result.appendChild(HtmlDrawerUtils.createHorseNameCell(horse));
        result.appendChild(HtmlDrawerUtils.createHorseFieldCell(horse, fieldLength));
        return result;
    };
    /**
     * Create horse name cell.
     *
     * @param horse The horse, contains the name
     * @returns {HTMLTableDataCellElement} The cell element instance
     */
    HtmlDrawerUtils.createHorseNameCell = function (horse) {
        var resultDataCell = document.createElement('td');
        resultDataCell.appendChild(document.createTextNode(horse.name));
        return resultDataCell;
    };
    /**
     * Create the horse picture div, and cell. Creates the finish line too.
     *
     * @param horse The horse contains the name
     * @param fieldLength The field length
     * @returns {HTMLTableDataCellElement} The cell element instance
     */
    HtmlDrawerUtils.createHorseFieldCell = function (horse, fieldLength) {
        var resultDataCell = document.createElement('td');
        var horseDiv = document.createElement('div');
        var horsePictureHtml = document.createElement('img');
        horsePictureHtml.width = horsePictureSize;
        horsePictureHtml.height = horsePictureSize;
        horsePictureHtml.src = horsePicture;
        horse.div = horseDiv;
        horseDiv.appendChild(horsePictureHtml);
        resultDataCell.appendChild(horseDiv);
        resultDataCell.style.width = fieldLength + "px";
        resultDataCell.style.borderRight = '5pt solid blue';
        return resultDataCell;
    };
    return HtmlDrawerUtils;
}());
/**
 * The race div class. It controls, the whole race.
 */
var RaceField = (function () {
    /**
     * Create the visual HTML of the horse race.
     *
     * @param fieldLength The field length in pixel
     * @param countdownStart The start number of the count down
     * @param horses The array of the horse racers
     */
    function RaceField(fieldLength, countdownStart, horses) {
        var _this = this;
        // Check for enough racer
        if (horses.length < minimalRacersNumber) {
            throw new Error('Not enough racers!');
        }
        this.countDownCounter = countdownStart;
        this.countDownStart = countdownStart;
        this.fieldLength = fieldLength;
        this.horses = horses;
        this.highlightFlag = false;
        this.hasWinner = false;
        this.randInterval = 300;
        this.fieldDiv = document.createElement('div');
        var fieldTable = document.createElement('table');
        fieldTable.style.borderCollapse = 'collapse';
        this.horses.forEach(function (horse) {
            horse.currentPosition = 0;
            fieldTable.appendChild(HtmlDrawerUtils.buildHorseField(fieldLength, horse));
        });
        this.fieldDiv.appendChild(fieldTable);
        this.startButton = HtmlDrawerUtils.createButton('Start Race!', true, function () { return _this.startCountDown(); });
        this.resetButton = HtmlDrawerUtils.createButton('Reset Race!', false, function () { return _this.resetRace(); });
        this.countDownDiv = HtmlDrawerUtils.createCountDownDiv(this.countDownCounter);
        document.body.appendChild(HtmlDrawerUtils.createRacersNameDiv(this.getRacersName()));
        document.body.appendChild(this.countDownDiv);
        document.body.appendChild(this.fieldDiv);
        document.body.appendChild(this.startButton);
        document.body.appendChild(this.resetButton);
    }
    /**
     * Move the horses randomly. This method calls setInterval and the setInterval method call back this function.
     */
    RaceField.prototype.moveHorse = function () {
        var _this = this;
        console.log("The current interval time is: " + this.randInterval);
        this.horses.forEach(function (horse) {
            horse.currentPosition += Math.floor(Math.random() * horse.strength);
            horse.div.style.marginLeft = horse.currentPosition + "px";
            _this.checkForWinner(horse);
        });
        if (!this.hasWinner) {
            this.randInterval = Math.round(Math.random() * (maxIntervalTime - minIntervalTime)) + minIntervalTime;
            clearInterval(this.raceTimer);
            this.raceTimer = setInterval(function () { return _this.moveHorse(); }, this.randInterval);
        }
    };
    /**
     * Checking for winner.
     *
     * @param horse The horse to check
     */
    RaceField.prototype.checkForWinner = function (horse) {
        if (horse.currentPosition >= this.fieldLength - horsePictureSize && !this.hasWinner) {
            this.stopRace();
            this.highlightWinner(horse);
            HtmlDrawerUtils.controlButton(this.resetButton, true);
            console.log("The winner is: " + horse.name);
        }
    };
    /**
     * Highlight the winner horse. The field changes its background by 1000ms.
     *
     * @param horse The winner horse
     */
    RaceField.prototype.highlightWinner = function (horse) {
        var _this = this;
        this.highlightTimer = setInterval(function () {
            if (_this.highlightFlag) {
                horse.div.parentElement.parentElement.style.background = 'blue';
            }
            else {
                horse.div.parentElement.parentElement.style.background = 'green';
            }
            _this.highlightFlag = !_this.highlightFlag;
        }, 1000);
    };
    /**
     * Start count down to race.
     */
    RaceField.prototype.startCountDown = function () {
        var _this = this;
        HtmlDrawerUtils.controlButton(this.startButton, false);
        this.startTimer = setInterval(function () {
            _this.countDownCounter--;
            _this.countDownDiv.innerText = "Count down to start: " + _this.countDownCounter;
            if (_this.countDownCounter == 0) {
                _this.countDownCounter = _this.countDownStart;
                clearInterval(_this.startTimer);
                _this.countDownDiv.innerText = 'Start!';
                _this.startRace();
            }
        }, 1000);
    };
    /**
     * Start race.
     */
    RaceField.prototype.startRace = function () {
        console.log('Race started!');
        this.moveHorse();
    };
    /**
     * Stop race.
     */
    RaceField.prototype.stopRace = function () {
        this.hasWinner = true;
        clearInterval(this.raceTimer);
        console.log('Race stopped!');
    };
    /**
     * Reset race. Everything goes back to the start point.
     */
    RaceField.prototype.resetRace = function () {
        clearInterval(this.highlightTimer);
        this.highlightFlag = false;
        this.hasWinner = false;
        this.countDownDiv.innerText = "Count down to start: " + this.countDownCounter;
        this.horses.forEach(function (horse) {
            horse.currentPosition = 0;
            horse.div.parentElement.parentElement.style.background = 'white';
            horse.div.style.margin = "0px 0px 0px " + horse.currentPosition + "px";
        });
        HtmlDrawerUtils.controlButton(this.startButton, true);
        HtmlDrawerUtils.controlButton(this.resetButton, false);
        console.log('Reset race!');
    };
    /**
     * Returns the racers name in a string array.
     *
     * @returns {string[]} The racers name in array
     */
    RaceField.prototype.getRacersName = function () {
        return this.horses.reduce(function (names, horse, currentIndex, array) {
            if (currentIndex == array.length - 1) {
                names.push(horse.name + ".");
            }
            else {
                names.push(horse.name + ", ");
            }
            return names;
        }, []);
    };
    return RaceField;
}());
/**
 * Start the program.
 */
new RaceField(800, 3, [
    { name: 'Lili', strength: 40 },
    { name: 'Dodo', strength: 41 },
    { name: 'Bela', strength: 35 },
    { name: 'EzEgyLo', strength: 30 }
]);
