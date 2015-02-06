var theater = new TheaterJS();
var time = function(min, max) {
  return Math.random() * (max - min) + min;
}
theater.describe("hero", 0.8, "#hero");
theater
  .write("hero:beautiful.", time(1250, 3500))
  .write("hero:awesome.", time(1250, 3500))
  .write("hero:spectacular.", time(1250, 3500))
  .write("hero:fun.", time(1250, 3500))
  .write("hero:fantastic.", time(1250, 3500))
  .write("hero:amazing.", time(1250, 3500))
  .write("hero:wonderful.", time(1250, 3500))
  .write("hero:cool.", time(1250, 3500))
  .write("hero:better.", time(1250, 3500))
  .write("hero:great.", time(1250, 3500))
  .write("hero:incredible.", time(1250, 3500))
  .write("hero:terrific.", time(1250, 3500))
  .write(function () { theater.play(true); });