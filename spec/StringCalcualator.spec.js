describe('String calculator', function() {

  it('should return 0 if empty string', function(){
    expect(calculator("")).toBe(0);
  });

  it('should retrun sum of one number', function(){
    expect(calculator("1")).toBe(1);
    expect(calculator("12")).toBe(12);
    expect(calculator("322")).toBe(322);
  });

  it('should retrun sum of two numbers', function(){
    expect(calculator("1,2")).toBe(3);
    expect(calculator("12,20")).toBe(32);
    expect(calculator("32,2")).toBe(34);
  });

  it('should retrun sum of any number of numbers', function(){
    expect(calculator("1,4")).toBe(5);
    expect(calculator("12,20,20")).toBe(52);
    expect(calculator("3,1,1,1,1")).toBe(7);
  });

  it('should retrun sum of any number of numbers with newlines', function(){
    expect(calculator("1,4")).toBe(5);
    expect(calculator("12,20\n20")).toBe(52);
    expect(calculator("3,1\n1,1\n1")).toBe(7);
    expect(calculator("3,1\n1,1\n1")).toBe(7);
  });


  it('should retrun sum of any number of numbers with custom delimiter', function(){
    expect(calculator("1,4")).toBe(5);
    expect(calculator("//;\n12;20;20")).toBe(52);
    expect(calculator("//p\n3p1p1p1p1")).toBe(7);
  });

  it('should throw error when negative passed', function(){
    expect(function(){ calculator("-1") }).toThrow(new Error('negatives not allowed'));
  });

  it('should throw error when mutliple negatives passed', function(){
    expect(function(){ calculator("//p\n3p-1p1p-1p1") }).toThrow(new Error('Numbers -1, -1, are not allowed'));
  });


});
