describe("Coatch", function () {

    it("Correct initialization", function () {
        expect(Coach.start("easy")).toBe(true);
        expect(Coach.start("22a")).toBe(false);
        expect(Coach.start("")).toBe(false);
    });

    it("Correct tracking", function () {
        expect(Coach.track("walk",1)).toBe(null);
        expect(Coach.start("easy")).toBe(true);
        expect(Coach.track("walk",1)).toBe(50);
        expect(Coach.track("2walk",1)).toBe(null);
        expect(Coach.track("bike",2)).toBe(200);
    });
    
    it("Correct tracking", function () {
        Coach.start("easys");
        expect(Coach.checkProgress()).toBe(null);
        Coach.start("easy");
        Coach.track("walk",1);
        Coach.track("bike",2);
        expect(Coach.checkProgress()).toBe(50);
    });

});
