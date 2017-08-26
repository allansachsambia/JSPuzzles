import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CodeMirror from 'react-codemirror';
import _ from 'lodash';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/theme/neo.css';
import 'codemirror/lib/codemirror.css';
import * as actions from '../../actions';
import CloseButton from './../../svgs/CloseButton';
import DesktopAppLogo from './../../svgs/DesktopAppLogo';
import Nav from '../Nav';
import PlayHeader from './PlayHeader';
import PlayCheatModal from './PlayCheatModal';
import PlayAsUserStyles from './../../styles/play/play-as-user.css';

export class PlayAsUser extends Component {
  static initialStateSet = false;
  static dbCodeSet = false;

  constructor(props) {
    super(props);
    this.setCode = this.setCode.bind(this);
    this.clearButtonClicked = this.clearButtonClicked.bind(this);
    this.saveButtonClicked = this.saveButtonClicked.bind(this);
    this.forwardButtonClicked = this.forwardButtonClicked.bind(this);
    this.decrementChallenge = this.decrementChallenge.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.onFinished = this.onFinished.bind(this);
    this.dbSetup = this.dbSetup.bind(this);
    this.initialSetup = this.initialSetup.bind(this);
    this.timeOutStore = [];
  }

  componentDidMount() {
    this.props.fetchCode();
  }

  componentDidUpdate() {
    if (PlayAsUser.initialStateSet === false) {
      this.initialSetup();
    } else if (
      PlayAsUser.dbCodeSet === false &&
      !_.isEmpty(this.props.dbCode)
    ) {
      this.dbSetup();
    }
  }

  displayPlayCheatModal() {
    const modal = document.querySelector('.play-cheat-modal');
    const modalBox = document.querySelector('.box');
    modal.style.display = 'initial';
    modalBox.style.display = 'initial';
  }

  onFinished() {
    this.props.history.push('/finished');
  }

  setCode(newCode) {
    this.props.setCode(newCode);
  }

  initialSetup() {
    const initialCurrent = 0;
    this.props.setCode(this.props.questions[initialCurrent].code);
    this.props.setCurrent(initialCurrent);
    this.props.setAnswers(this.props.questions);
    PlayAsUser.initialStateSet = true;
  }

  dbSetup() {
    const dbCurrent = this.props.dbCode[0].current;
    this.props.setCode(this.props.dbCode[0].code[dbCurrent].code);
    this.props.setCurrent(dbCurrent);
    this.props.setAnswers(this.props.dbCode[0].code);
    PlayAsUser.dbCodeSet = true;
  }

  setAnswers() {
    const answers = this.props.answers;
    const newAnswers = answers[0].map((answer, i) => {
      if (i === this.props.current) {
        return {
          name: answer.name,
          code: this.props.code
        };
      }
      return answer;
    }, this);
    this.props.setAnswers(newAnswers);
  }

  errMsg() {
    const errMsg = this.props.error ? this.props.error : '';
    return errMsg;
  }

  saveButtonClicked() {
    this.updateAnswer({ increment: false });
  }

  updateAnswer({ increment }) {
    const answers = this.props.answers;
    const newAnswers = answers[0].map((answer, i) => {
      if (i === this.props.current) {
        return {
          name: answer.name,
          code: this.props.code
        };
      }
      return answer;
    }, this);
    if (increment) {
      this.props.updateCode({
        code: newAnswers,
        current: this.props.current + 1
      });
    } else {
      this.props.updateCode({ code: newAnswers, current: this.props.current });
    }
  }

  forwardButtonClicked() {
    this.setAnswers();
    this.checkFunctionValidity();
    this.testCodeValidity();
  }

  clearButtonClicked() {
    this.props.setCode(this.props.questions[this.props.current].code);
    this.props.setError('');
  }

  displayConfirmationModal() {
    const modal = document.querySelector('.play-reset-modal');
    const modalBox = document.querySelector('.box');
    modal.style.display = 'initial';
    modalBox.style.display = 'initial';
  }

  checkFunctionValidity() {
    const jsRaw = this.props.code;
    const functionName = _.camelCase(
      this.props.questions[this.props.current].name
    );
    const js = jsRaw
      .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1')
      .trim();
    const reg = new RegExp(
      '^function\\s+' + functionName + '\\s*\\(.*\\)\\s*\\{(.|\\n)*\\}$'
    );
    const passedFirstTest = reg.test(js);
    if (passedFirstTest) {
      this.props.setError('');
      const scriptEl = document.createElement('script');
      scriptEl.textContent = jsRaw;
      document.body.appendChild(scriptEl);
    } else {
      this.displayErrMsg('Only work within the function body');
    }
  }

  testCodeValidity() {
    switch (this.props.current) {
      case 0:
        this.checkReverseConsonants();
        break;
      case 1:
        this.checkFizzBuzzish();
        break;
      case 2:
        this.checkOddsAndEvens();
        break;
      case 3:
        this.checkDoesABodyGood();
        break;
      case 4:
        this.checkRandomRepeater();
        break;
      case 5:
        this.checkReverseCharSort();
        break;
      case 6:
        this.checkLucy();
        break;
      case 7:
        this.checkLoser();
        break;
      case 8:
        this.checkIsItSafe();
        break;
      case 9:
        this.checkMonthRep();
        break;
      case 10:
        this.checkVowelSnubber();
        break;
      case 11:
        this.checkValentinesDay();
        break;
      case 12:
        this.checkOMGWords();
        break;
      case 13:
        this.checkSmores();
        break;
      case 14:
        this.checkTypeChecker();
        break;
      case 15:
        this.checkCupcakeCandyCane();
        break;
      case 16:
        this.checkMilkshakeJelly();
        break;
      case 17:
        this.checkTheAviator();
        break;
      case 18:
        this.checkStutter();
        break;
      case 19:
        this.checkTasteTheRainbow();
        break;
      case 20:
        this.checkInnerStrip();
        break;
      case 21:
        this.checkCharReverseSort();
        break;
      case 22:
        this.checkNumberBouncer();
        break;
      case 23:
        this.checkFrankenstring();
        break;
      case 24:
        this.checkCamelChars();
        break;
      case 25:
        this.checkILoveVowels();
        break;
      case 26:
        this.checkCatfish();
        break;
      case 27:
        this.checkWeirdWords();
        break;
      case 28:
        this.checkRiceMilk();
        break;
      case 29:
        this.checkOnlyLowerCase();
        break;
      case 30:
        this.checkAlice();
        break;
      case 31:
        this.checkHipHop();
        break;
      case 32:
        this.checkPeanuteButterJellyTime();
        break;
      case 33:
        this.checkOuterStrip();
        break;
      case 34:
        this.checkIHateVowels();
        break;
      case 35:
        this.checkBubbleBobble();
        break;
      case 36:
        this.checkAintNobodyGotTimeForThat();
        break;
      case 37:
        this.checkStringBouncer();
        break;
      case 38:
        this.checkXFiles();
        break;
      case 39:
        this.checkRoute66();
        break;
      default:
    }
  }

  decrementChallenge() {
    if (this.props.current !== 0) {
      if (document.scripts.length > 0) {
        delete document.scripts[1];
      }
      this.props.setCurrent(this.props.current - 1);
      this.props.setError('');
      this.props.setCode(this.props.answers[0][this.props.current - 1].code);
    }
  }

  incrementChallenge() {
    delete document.scripts[1];
    this.props.setCurrent(this.props.current + 1);
    this.props.setError('');
    this.props.setCode(this.props.answers[0][this.props.current + 1].code);
    this.updateAnswer({ increment: true });
  }

  displayErrMsg(msg) {
    const self = this;
    this.timeOutStore.forEach(timeout => {
      clearTimeout(timeout);
    });
    this.timeOutStore = [];
    this.props.setError(msg);
    this.timeOutStore.push(
      setTimeout(() => {
        self.props.setError('');
      }, 7000)
    );
  }

  // Challenge #1
  checkReverseConsonants() {
    if (window.reverseConsonants) {
      // Try & Catch Block
      try {
        window.reverseConsonants('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.reverseConsonants(
          'The rain in spain falls mainly in the plain'
        ) === 'nlp ht n ylnm sllf nps n nr hT';
      const check2 =
        window.reverseConsonants(
          'I know now that my wife has become host to a Kandarian demon'
        ) === 'nmd nrdnK  t tsh mcb sh fw ym tht wn wnk ';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #2
  checkFizzBuzzish() {
    const error = this.props.error;
    if (window.fizzBuzzish) {
      // Try & Catch Block
      try {
        window.fizzBuzzish(50);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const checkStore = [];
      for (let i = 0; i < 1000; i += 1) {
        const by3 = i % 3 === 0;
        const by5 = i % 5 === 0;
        const by3and5 = i % 3 === 0 && i % 5 === 0;
        if (by3and5) {
          checkStore.push(window.fizzBuzzish(i) === 'FizzBuzz');
        } else if (by5) {
          checkStore.push(window.fizzBuzzish(i) === 'Buzz');
        } else if (by3) {
          checkStore.push(window.fizzBuzzish(i) === 'Fizz');
        }
      }
      checkStore.push(window.fizzBuzzish('Hello World') === 'What?');
      checkStore.push(window.fizzBuzzish(['Hello World']) === 'What?');
      checkStore.push(window.fizzBuzzish({ Hello: 'World' }) === 'What?');
      checkStore.push(window.fizzBuzzish(/Hello World/) === 'What?');
      const correct = checkStore.every(item => item === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #3
  checkOddsAndEvens() {
    if (window.oddsAndEvens) {
      // Try & Catch Block
      try {
        window.oddsAndEvens('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.oddsAndEvens('The rain in spain falls mainly in the plain') ===
        'tHe rAiN In sPaIn fAlLs mAiNlY In tHe pLaIn';
      const check2 =
        window.oddsAndEvens(
          'I know now that my wife has become host to a Kandarian demon'
        ) === 'i kNoW NoW ThAt mY WiFe hAs bEcOmE HoSt tO A KaNdArIaN DeMoN';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #4
  checkDoesABodyGood() {
    if (window.doesABodyGood) {
      // Try & Catch Block
      try {
        window.doesABodyGood('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.doesABodyGood('Drink your milk') === 'does a body good';
      const check2 =
        window.doesABodyGood('Drink your MILK') === 'does a body good';
      const check3 =
        window.doesABodyGood('Drink your water') === 'lactose intolerant?';
      const check4 =
        window.doesABodyGood('Drink your WATER') === 'lactose intolerant?';
      const checks = [check1, check2, check3, check4];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #5
  checkRandomRepeater() {
    if (window.randomRepeater) {
      // Try & Catch Block
      try {
        window.randomRepeater('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const checks = [];
      for (let i = 0; i < 1000; i += 1) {
        const repeatVal = window.randomRepeater('Hello There');
        const val = repeatVal.slice(0, 11);
        const valOk = val === 'Hello There';
        if (valOk) {
          const checkIt = repeatVal.match(/Hello There/g);
          checks.push(checkIt.length <= 10);
        }
      }
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #6
  checkReverseCharSort() {
    if (window.reverseCharSorter) {
      // Try & Catch Block
      try {
        window.reverseCharSorter('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.reverseCharSorter(
          'The rain in Spain falls mainly in the plain'
        ) === 'ytsrppnnnnnnmlllliiiiiihhfeeaaaaaTS';
      const check2 =
        window.reverseCharSorter(
          'I know now that my wife has become host to a Kandarian demon'
        ) === 'ywwwttttssroooooonnnnnmmmkiihhhfeeeeddcbaaaaaaKI';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #7
  checkLucy() {
    if (window.lucy) {
      // Try & Catch Block
      try {
        window.lucy(['The rain in spain falls mainly in the plain']);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.lucy(['lucy', 'diamonds', 'penguins']) ===
        'In the sky with diamonds';
      const check2 = window.lucy(['lucy', 'penguins']) === 'I love Lucy';
      const check3 =
        window.lucy(['penguins', 'diamonds']) === 'No Lucy right now, thanks';
      const check4 = window.lucy(['']) === 'No Lucy right now, thanks';
      const check5 = window.lucy(['lucy']) === 'I love Lucy';
      const check6 =
        window.lucy(['pancakes', 'diamonds', 'lucy']) ===
        'In the sky with diamonds';
      const checks = [check1, check2, check3, check4, check5, check6];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #8
  checkLoser() {
    if (window.loser) {
      // Try & Catch Block
      try {
        window.loser('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.loser('Hello loser you r a loser man') ===
        'Hello loserbaby you r a loserbaby man';
      const check2 =
        window.loser('loser loser omg loser man') ===
        'loserbaby loserbaby omg loserbaby man';
      const check3 =
        window.loser(
          'I know now that my wife has become host to a Kandarian demon'
        ) === 'I know now that my wife has become host to a Kandarian demon';
      const checks = [check1, check2, check3];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #9
  checkIsItSafe() {
    if (window.isItSafe) {
      // Try & Catch Block
      try {
        window.isItSafe([5, 6, 7]);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.isItSafe([12.5, 3]) ===
        'is it safe?is it safe?is it safe?is it safe?is it safe?is it safe?is it safe?is it safe?is it safe?is it safe?';
      const check2 = window.isItSafe([12.5, 7, 7]) === 'is it safe?is it safe?';
      const check3 =
        window.isItSafe([12.5, 9]) ===
        'is it safe?is it safe?is it safe?is it safe?';
      const checks = [check1, check2, check3];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #10
  checkMonthRep() {
    if (window.monthRep) {
      // Try & Catch Block
      try {
        window.monthRep(4);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const d = new Date();
      const m = d.getMonth();
      let month;
      if (m === 0) {
        month = 'January';
      }
      if (m === 1) {
        month = 'February';
      }
      if (m === 2) {
        month = 'March';
      }
      if (m === 3) {
        month = 'April';
      }
      if (m === 4) {
        month = 'May';
      }
      if (m === 5) {
        month = 'June';
      }
      if (m === 6) {
        month = 'July';
      }
      if (m === 7) {
        month = 'August';
      }
      if (m === 8) {
        month = 'September';
      }
      if (m === 9) {
        month = 'October';
      }
      if (m === 10) {
        month = 'November';
      }
      if (m === 11) {
        month = 'December';
      }
      const check1 = window.monthRep(2) === month.repeat(2);
      const check2 = window.monthRep(99) === month.repeat(99);
      const check3 = window.monthRep(44) === month.repeat(44);
      const checks = [check1, check2, check3];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #11
  checkVowelSnubber() {
    if (window.vowelSnubber) {
      // Try & Catch Block
      try {
        window.vowelSnubber('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 = window.vowelSnubber('Hello World') === 'hll WRLD';
      const check2 =
        window.vowelSnubber('The rain in Spain falls mainly in the plain.') ===
        'th RN n SPN flls MNLY n TH pln.';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #12
  checkValentinesDay() {
    if (window.valentinesDay) {
      // Try & Catch Block
      try {
        window.valentinesDay('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.valentinesDay('I love valentines day day') ===
        'I love hearts LOVELOVEdayLOVELOVE LOVELOVEdayLOVELOVE';
      const check2 =
        window.valentinesDay('I love valentines day day valentinesday') ===
        'I love hearts LOVELOVEdayLOVELOVE LOVELOVEdayLOVELOVE heartsLOVELOVEdayLOVELOVE';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #13
  checkOMGWords() {
    if (window.omgWords) {
      // Try & Catch Block
      try {
        window.omgWords('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.omgWords('Ello wurld Hello Wurllld') ===
        'Elloomg Helloomg Wurllldomg wurldomg';
      const check2 =
        window.omgWords(
          'I know now that my wife has become host to a Kandarian demon'
        ) ===
        'Iomg Kandarianomg aomg becomeomg demonomg hasomg hostomg knowomg myomg nowomg thatomg toomg wifeomg';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #14
  checkSmores() {
    if (window.smores) {
      // Try & Catch Block
      try {
        window.smores([1, 2, 3]);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 = window.smores(['hello']) === 'hungry';
      const check2 = window.smores([{ hello: 'world' }]) === 'hungry';
      const check3 = window.smores([['hello']]) === 'hungry';
      const check4 = window.smores([true]) === 'hungry';
      const check5 = window.smores([undefined]) === 'hungry';
      const check6 = window.smores([null]) === 'hungry';
      const checks = [check1, check2, check3, check4, check5, check6];
      for (let i = 0; i < 500; i += 1) {
        const divisibleBy6 = i % 6 === 0;
        const divisibleBy9 = i % 9 === 0;
        const divisibleBy6And9 = divisibleBy6 && divisibleBy9;
        if (divisibleBy6And9) {
          checks.push(window.smores([i]) === 'chocolate');
        } else if (divisibleBy6) {
          checks.push(window.smores([i]) === 'graham cracker');
        } else if (divisibleBy9) {
          checks.push(window.smores([i]) === 'marshmallow');
        }
      }
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #15
  checkTypeChecker() {
    if (window.typeChecker) {
      // Try & Catch Block
      try {
        window.typeChecker('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 = window.typeChecker(['hello']) === 'Ray gun';
      const check2 = window.typeChecker({ hello: 'world' }) === 'Obi-Wan';
      const check3 = window.typeChecker('hello world') === 'Polly-o';
      const check4 = window.typeChecker(1) === 'Numbness';
      const check5 = window.typeChecker(true) === 'Wooly bully';
      const checks = [check1, check2, check3, check4, check5];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #16
  checkCupcakeCandyCane() {
    if (window.cupcakeCandyCane) {
      // Try & Catch Block
      try {
        window.cupcakeCandyCane(4);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const lengthChecks = [];
      for (let i = 0; i < 200; i += 1) {
        const arr1 = window.cupcakeCandyCane(NaN);
        lengthChecks.push(arr1);
        const arr2 = window.cupcakeCandyCane('string');
        lengthChecks.push(arr2);
      }
      const correctLength = lengthChecks.every(check => check.length < 6);
      if (correctLength) {
        const naNTest = window
          .cupcakeCandyCane(NaN)
          .every(tst => tst === 'Cupcake');
        const objTest = window
          .cupcakeCandyCane({})
          .every(tst => tst === 'Candy cane');
        const strTest = window
          .cupcakeCandyCane('')
          .every(tst => tst === 'Candy cane');
        const boolTest = window
          .cupcakeCandyCane(true)
          .every(tst => tst === 'Candy cane');
        const nullTest = window
          .cupcakeCandyCane(null)
          .every(tst => tst === 'Candy cane');
        const undTest = window
          .cupcakeCandyCane(undefined)
          .every(tst => tst === 'Candy cane');
        const tests = [naNTest, strTest, objTest, boolTest, nullTest, undTest];
        const correct = tests.every(tst => tst === true);
        if (correct) {
          this.incrementChallenge();
        } else {
          this.displayErrMsg('Incorrect answer');
        }
      }
    }
  }

  // Challenge #17
  checkMilkshakeJelly() {
    if (window.milkshakeJelly) {
      // Try & Catch Block
      try {
        window.milkshakeJelly(['The rain in spain falls mainly in the plain']);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const nonStrCheck1 = window.milkshakeJelly([1])[0] === 1;
      const nonStrCheck2 = window.milkshakeJelly([true])[0] === true;
      const nonStrCheck3 =
        window.milkshakeJelly([{ color: 'blue' }])[0].color === 'blue';
      const nonStrCheck4 = window.milkshakeJelly([undefined])[0] === undefined;
      const nonStrCheck5 = window.milkshakeJelly([null])[0] === null;
      const nonStringCheck = [
        nonStrCheck1,
        nonStrCheck2,
        nonStrCheck3,
        nonStrCheck4,
        nonStrCheck5
      ];
      const nonStringsPass = nonStringCheck.every(check => check === true);
      if (nonStringsPass) {
        const arr = window.milkshakeJelly([
          ' Milkshake  ',
          'Hello',
          'World',
          'Jelly',
          '   Milkshake   ',
          ' Milkshake   '
        ]);
        const jellyChars = arr[3].split('');
        let newJellyChars = jellyChars.map(char => {
          if (char.charCodeAt(0) === 160) {
            const newChar = String.fromCharCode(32);
            return newChar;
          }
          return char;
        });
        newJellyChars = newJellyChars.join('');
        const mJCheck1 = arr[0] === 'Milkshake';
        const mJCheck2 = arr[1] === 'Hello';
        const mJCheck3 = arr[2] === 'World';
        const mJCheck4 = newJellyChars === '     Jelly     ';
        const mJCheck5 = arr[0] === 'Milkshake';
        const mJCheck6 = arr[0] === 'Milkshake';
        const mJChecks = [
          mJCheck1,
          mJCheck2,
          mJCheck3,
          mJCheck4,
          mJCheck5,
          mJCheck6
        ];
        const correct = mJChecks.every(check => check === true);
        if (correct) {
          this.incrementChallenge();
        } else {
          this.displayErrMsg('Incorrect answer');
        }
      }
    }
  }

  // Challenge #18
  checkTheAviator() {
    if (window.theAviator) {
      // Try & Catch Block
      try {
        window.theAviator('The rain', 'in spain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.theAviator('The 1 2 3 rRrR99ain', 'in Spain')[0] === '12399';
      const check2 =
        window.theAviator('The 1 2 3 rRrR99ain', 'in Spain')[1] === '';
      const check3 =
        window.theAviator('The 1 2 3 rRrR99ain', 'in Spain')[2] === 'aaeiii';
      const check4 =
        window.theAviator('The 1 2 3 rRrR99ain', 'in Spain')[3] === 'RRST';
      const check5 =
        window.theAviator('The 1 2 3 rRrR99ain', 'in Spain')[4] === 'hnnnprr';
      const checks = [check1, check2, check3, check4, check5];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #19
  checkStutter() {
    if (window.stutter) {
      // Try & Catch Block
      try {
        window.stutter('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.stutter('The rain in Spain falls mainly in the plain.') ===
        'ThThe rarain inin SpSpain fafalls mamainly inin ththe plplain.';
      const check2 =
        window.stutter(
          'I know now that my wife has become host to a Kandarian demon'
        ) ===
        'II knknow nonow ththat mymy wiwife hahas bebecome hohost toto aa KaKandarian dedemon';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #20
  checkTasteTheRainbow() {
    if (window.tasteTheRainbow) {
      // Try & Catch Block
      try {
        window.tasteTheRainbow('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const redCheck = window
        .tasteTheRainbow('The rain in Spain blah blah red')
        .sort();
      const orangeCheck = window
        .tasteTheRainbow('The rain in Spain blah blah orange')
        .sort();
      const yellowCheck = window
        .tasteTheRainbow('The rain in Spain blah blah yellow')
        .sort();
      const greenCheck = window
        .tasteTheRainbow('The rain in Spain blah blah green')
        .sort();
      const blueCheck = window
        .tasteTheRainbow('The rain in Spain blah blah blue')
        .sort();
      const purpleCheck = window
        .tasteTheRainbow('The rain in Spain blah blah purple')
        .sort();
      const redBar = ['orange', 'yellow', 'green', 'blue', 'purple'].sort();
      const orangeBar = ['red', 'yellow', 'green', 'blue', 'purple'].sort();
      const yellowBar = ['red', 'orange', 'green', 'blue', 'purple'].sort();
      const greenBar = ['red', 'orange', 'yellow', 'blue', 'purple'].sort();
      const blueBar = ['red', 'orange', 'yellow', 'green', 'purple'].sort();
      const purpleBar = ['red', 'orange', 'yellow', 'green', 'blue'].sort();
      const redPassed =
        redCheck.length === redBar.length &&
        redCheck.every((redCheckI, i) => redCheckI === redBar[i]);
      const orangePassed =
        orangeCheck.length === orangeBar.length &&
        orangeCheck.every((orangeCheckI, i) => orangeCheckI === orangeBar[i]);
      const yellowPassed =
        yellowCheck.length === yellowBar.length &&
        yellowCheck.every((yellowCheckI, i) => yellowCheckI === yellowBar[i]);
      const greenPassed =
        greenCheck.length === greenBar.length &&
        greenCheck.every((greenCheckI, i) => greenCheckI === greenBar[i]);
      const bluePassed =
        blueCheck.length === blueBar.length &&
        blueCheck.every((blueCheckI, i) => blueCheckI === blueBar[i]);
      const purplePassed =
        purpleCheck.length === purpleBar.length &&
        purpleCheck.every((purpleCheckI, i) => purpleCheckI === purpleBar[i]);
      const tTRCPassed =
        window.tasteTheRainbow('The rain in Spain blah blah')[0] ===
        'taste the rainbow';
      const tests = [
        redPassed,
        orangePassed,
        yellowPassed,
        greenPassed,
        bluePassed,
        purplePassed,
        tTRCPassed
      ];
      const correct = tests.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #21
  checkInnerStrip() {
    if (window.innerStrip) {
      // Try & Catch Block
      try {
        window.innerStrip('<div>hello world</div>');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.innerStrip(
          '<div>I know now that my wife has become host to a Kandarian demon.</div>'
        ) === 'I know now that my wife has become host to a Kandarian demon.';
      const check2 =
        window.innerStrip(
          '<span>The rain in Spain falls mainly in the plain.</span>'
        ) === 'The rain in Spain falls mainly in the plain.';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #22
  checkCharReverseSort() {
    if (window.charSortReverse) {
      // Try & Catch Block
      try {
        window.charSortReverse('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.charSortReverse('The rain in Spain') ===
        '99887755544433332222111111111111111100000000';
      const check2 =
        window.charSortReverse('I know now') === '997733322111111111111111000';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #23
  checkNumberBouncer() {
    if (window.numberBouncer) {
      // Try & Catch Block
      try {
        window.numberBouncer(4);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.numberBouncer(9) === 'not cool bro, I want something better';
      const check2 =
        window.numberBouncer(Number.MAX_VALUE) === 'pretty big number dude';
      const check3 =
        window.numberBouncer(Number.MIN_VALUE) === 'pretty small number dude';
      const check4 =
        window.numberBouncer(Number.POSITIVE_INFINITY) === 'I love infinity';
      const check5 =
        window.numberBouncer(Number.NEGATIVE_INFINITY) ===
        'Weird but cool, negative infinity is cool';
      const checks = [check1, check2, check3, check4, check5];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #24
  checkFrankenstring() {
    if (window.frankenstring) {
      // Try & Catch Block
      try {
        window.frankenstring('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.frankenstring('The rain') ===
        '\b\u0004\u0001\u0000\u0004\u0001\u0000\u0001\u0003\u0002\u0001\u0001\u0004\t\u0007\u0001\u0000\u0005\u0001\u0001\u0000';
      const check2 =
        window.frankenstring('in Spain') ===
        '\u0001\u0000\u0005\u0001\u0001\u0000\u0003\u0002\b\u0003\u0001\u0001\u0002\t\u0007\u0001\u0000\u0005\u0001\u0001\u0000';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #25
  checkCamelChars() {
    if (window.camelChars) {
      // Try & Catch Block
      try {
        window.camelChars('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.camelChars('The rain in Spain falls mainly in the plain.') ===
        'the rain in spain fallS MAINLY IN THE PLAIN.';
      const check2 =
        window.camelChars(
          'I know now that my wife has become host to a Kandarian demon.'
        ) === 'i know now that my wife has beCOME HOST TO A KANDARIAN DEMON.';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #26
  checkILoveVowels() {
    if (window.iLoveVowels) {
      // Try & Catch Block
      try {
        window.iLoveVowels('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.iLoveVowels('I know now that my wife.') ===
        'I knooooow nooooow thaaaaat my wiiiiifeeeee.';
      const check2 =
        window.iLoveVowels('The rain in Spain.') ===
        'Theeeee raaaaaiiiiin iiiiin Spaaaaaiiiiin.';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #27
  checkCatfish() {
    if (window.catfish) {
      // Try & Catch Block
      try {
        window.catfish(8);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const checkStore = [];
      for (let i = 0; i < 1000; i += 1) {
        const by4 = i % 4 === 0;
        const by5 = i % 5 === 0;
        const by4and5 = i % 4 === 0 && i % 5 === 0;
        if (by4and5) {
          checkStore.push(window.catfish(i) === 'CatFish');
        } else if (by4) {
          checkStore.push(window.catfish(i) === 'Cat');
        } else if (by5) {
          checkStore.push(window.catfish(i) === 'Fish');
        }
      }
      checkStore.push(window.catfish([1]) === 'Sushi please');
      checkStore.push(window.catfish({ color: 'red' }) === 'Sushi please');
      checkStore.push(window.catfish(true) === 'Sushi please');
      checkStore.push(window.catfish(null) === 'Sushi please');
      checkStore.push(window.catfish(undefined) === 'Sushi please');
      const correct = checkStore.every(item => item === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #28
  checkWeirdWords() {
    if (window.weirdWords) {
      // Try & Catch Block
      try {
        window.weirdWords('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.weirdWords('The rain in Spain falls mainly in the plain.') ===
        'THE rain IN spain FALLS mainly IN the PLAIN.';
      const check2 =
        window.weirdWords(
          'I know now that my wife has become host to a Kandarian demon.'
        ) === 'I know NOW that MY wife HAS become HOST to A kandarian DEMON.';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #29
  checkRiceMilk() {
    if (window.riceMilk) {
      // Try & Catch Block
      try {
        window.riceMilk('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.riceMilk('omg i love rice milk') ===
        'how do you milk a grain of rice?';
      const check2 = window.riceMilk('omg i love water') === 'Almond milk?';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #30
  checkOnlyLowerCase() {
    if (window.onlyLowerCase) {
      // Try & Catch Block
      try {
        window.onlyLowerCase('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const lengthChecks = [];
      for (let i = 0; i < 100; i += 1) {
        lengthChecks.push(window.onlyLowerCase('Hello World'));
      }
      const correctLength = lengthChecks.every(check => check.length < 11);
      if (correctLength) {
        const valChecks = window.onlyLowerCase('Hello World');
        const correct = valChecks.every(check => check === 'ello orld');
        if (correct) {
          this.incrementChallenge();
        } else {
          this.displayErrMsg('Incorrect answer');
        }
      }
    }
  }

  // Challenge #31
  checkAlice() {
    if (window.alice) {
      // Try & Catch Block
      try {
        window.alice(['The rain in spain falls mainly in the plain']);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.alice(['Gina', 'Tina']) ===
        'Alice is not home can you please leave a message?';
      const check2 = window.alice(['Gina', 'Alice']) === 'Which Alice?';
      const check3 = window.alice(['Dilbert', 'Alice']) === 'Coffee';
      const checks = [check1, check2, check3];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #32
  checkHipHop() {
    if (window.hipHop) {
      // Try & Catch Block
      try {
        window.hipHop('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.hipHop('A rabbit with a broken hip') ===
        'A rabbit with a broken hiphop';
      const check2 = window.hipHop('My hip is broke') === 'My hiphop is broke';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #33
  checkPeanuteButterJellyTime() {
    if (window.peanutButterJellyTime) {
      // Try & Catch Block
      try {
        window.peanutButterJellyTime([
          'The rain in spain falls mainly in the plain'
        ]);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.peanutButterJellyTime([3, 7, 6]) ===
        'peanut butter jelly time!peanut butter jelly time!peanut butter jelly time!peanut butter jelly time!';
      const check2 =
        window.peanutButterJellyTime([3, 7, 2, 2]) ===
        'peanut butter jelly time!peanut butter jelly time!peanut butter jelly time!peanut butter jelly time!peanut butter jelly time!peanut butter jelly time!peanut butter jelly time!peanut butter jelly time!peanut butter jelly time!peanut butter jelly time!';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #34
  checkOuterStrip() {
    if (window.outerStrip) {
      // Try & Catch Block
      try {
        window.outerStrip('<div>hello world</div>');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.outerStrip('<div>Hello World</div>') === '<div></div>';
      const check2 =
        window.outerStrip('<span>Hello World</span>') === '<span></span>';
      const checks = [check1, check2];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #35
  checkIHateVowels() {
    if (window.iHateVowels) {
      // Try & Catch Block
      try {
        window.iHateVowels('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.iHateVowels('I know now that my wife is an umbrella') ===
        'I kn0w n0w th@t my w1f3 1s @n vmbr3ll@';
      const checks = [check1];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #36
  checkBubbleBobble() {
    if (window.bubbleBobble) {
      // Try & Catch Block
      try {
        window.bubbleBobble(9);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const checkStore = [];
      for (let i = 0; i < 1000; i += 1) {
        const by9 = i % 9 === 0;
        const by12 = i % 12 === 0;
        const by9and12 = i % 9 === 0 && i % 12 === 0;
        if (by9and12) {
          checkStore.push(window.bubbleBobble(i) === 'BubbleBobble');
        } else if (by9) {
          checkStore.push(window.bubbleBobble(i) === 'Bubble');
        } else if (by12) {
          checkStore.push(window.bubbleBobble(i) === 'Bobble');
        }
      }
      checkStore.push(window.bubbleBobble(1) === 'Pop the bubble');
      checkStore.push(window.bubbleBobble([]) === 'Pop the bubble');
      checkStore.push(
        window.bubbleBobble({ color: 'red' }) === 'Pop the bubble'
      );
      checkStore.push(window.bubbleBobble(true) === 'Pop the bubble');
      checkStore.push(window.bubbleBobble(null) === 'Pop the bubble');
      checkStore.push(window.bubbleBobble(undefined) === 'Pop the bubble');
      const correct = checkStore.every(item => item === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #37
  checkAintNobodyGotTimeForThat() {
    if (window.aintNobodyGotTimeForThat) {
      // Try & Catch Block
      try {
        window.aintNobodyGotTimeForThat('<div>Hello World</div>');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.aintNobodyGotTimeForThat('<div>Hello World</div>') ===
        '<div>nobody got time for that</div>';
      const checks = [check1];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #38
  checkStringBouncer() {
    if (window.stringBouncer) {
      // Try & Catch Block
      try {
        window.stringBouncer('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.stringBouncer('<div>Hello Broh</div>') === 'great html bro';
      const check2 =
        window.stringBouncer('<span>Omg</span>') === 'great html bro';
      const check3 =
        window.stringBouncer('Hello Broh') ===
        'nope, it has no opening and closing tags';
      const check4 =
        window.stringBouncer('Omg') ===
        'nope, it has no opening and closing tags';
      const checks = [check1, check2, check3, check4];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #39
  checkXFiles() {
    if (window.xFiles) {
      // Try & Catch Block
      try {
        window.xFiles('The rain in spain falls mainly in the plain');
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const check1 =
        window.xFiles('Falling aliens from outerspace') === 'I want to believe';
      const check2 =
        window.xFiles('Killer undead aliens') === 'I want to believe';
      const check3 =
        window.xFiles('Falling zombies from outerspace') ===
        'aliens do not exist';
      const check4 =
        window.xFiles('Killer undead zombies') === 'aliens do not exist';
      const checks = [check1, check2, check3, check4];
      const correct = checks.every(check => check === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  // Challenge #40
  checkRoute66() {
    if (window.route66) {
      // Try & Catch Block
      try {
        window.route66(6);
      } catch (err) {
        this.displayErrMsg(err.toString());
        return;
      }
      // Custom Test
      const checkStore = [];
      for (let i = 0; i < 1000; i += 1) {
        const by6 = i % 6 === 0;
        const by11 = i % 11 === 0;
        const by6and11 = i % 6 === 0 && i % 11 === 0;
        if (by6and11) {
          checkStore.push(window.route66(i) === 'HolyMoly');
        } else if (by6) {
          checkStore.push(window.route66(i) === 'Holy');
        } else if (by11) {
          checkStore.push(window.route66(i) === 'Moly');
        }
      }
      checkStore.push(window.route66([1]) === 'What the heck is this?');
      checkStore.push(
        window.route66({ color: 'red' }) === 'What the heck is this?'
      );
      checkStore.push(window.route66(true) === 'What the heck is this?');
      checkStore.push(window.route66(null) === 'What the heck is this?');
      checkStore.push(window.route66(undefined) === 'What the heck is this?');
      const correct = checkStore.every(item => item === true);
      if (correct) {
        this.incrementChallenge();
      } else {
        this.displayErrMsg('Incorrect answer');
      }
    }
  }

  render() {
    const current = this.props.current === null ? 0 : this.props.current;
    const questions = this.props.questions;
    switch (this.props.current) {
      case 40:
        this.onFinished();
        return <div />;
      default:
        return (
          <div className="play-as-user">
            <Nav for="play" />
            <PlayHeader />
            <PlayCheatModal userType="user" />
            <div className="play-controls">
              <div role="button" tabIndex={0} className="control">
                <Link to="/dashboard">
                  <i className="fa fa-tachometer" aria-hidden="true" />
                </Link>
              </div>
              <div
                role="button"
                tabIndex={0}
                onKeyDown={this.saveButtonClicked}
                className="control"
                onClick={this.saveButtonClicked}
              >
                <i className="fa fa-floppy-o" aria-hidden="true" />
              </div>
              <div
                role="button"
                tabIndex={0}
                className="control"
                onKeyDown={this.displayPlayCheatModal}
                className="control"
                onClick={this.displayPlayCheatModal}
              >
                <i
                  className="controls-icon cheat-icon fa fa-flag"
                  aria-hidden="true"
                />
              </div>
              <div
                role="button"
                tabIndex={0}
                onKeyDown={this.clearButtonClicked}
                className="control"
                onClick={this.clearButtonClicked}
              >
                <i className="fa fa-eraser" aria-hidden="true" />
              </div>
              <div
                role="button"
                tabIndex={0}
                onKeyDown={this.forwardButtonClicked}
                className="control"
                onClick={this.forwardButtonClicked}
              >
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
              </div>
            </div>
            <div className="play-area">
              <CodeMirror
                value={this.props.code}
                onChange={this.setCode}
                options={{
                  mode: 'javascript',
                  theme: 'neo',
                  lineNumbers: true,
                  lineWrapping: true,
                  tabSize: 2
                }}
              />
            </div>
            <div className="errors">
              {this.errMsg().toUpperCase()}
            </div>
          </div>
        );
    }
  }
}

function mapStateToProps({
  questions,
  googleData,
  answers,
  code,
  error,
  current,
  dbCode
}) {
  return {
    questions,
    googleData,
    answers,
    code,
    error,
    current,
    dbCode
  };
}

export default connect(mapStateToProps, actions)(PlayAsUser);
