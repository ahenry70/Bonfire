  describe('repeat', function(){
    it('Entered ("a", 0) -- expected ("a")', function(){
      expect(repeat("a", 0)).toEqual("a");
    });

    it('Entered ("a", -1) -- expected ("")', function(){
      expect(repeat("a", -1)).toEqual("");
    });

    it('Entered ("a", 1) -- expected ("a")', function(){
      expect(repeat("a", 1)).toEqual("a");
    });

    it('Entered ("a", 2) -- expected ("aa")', function(){
      expect(repeat("a", 2)).toEqual("aa");
    });


});
