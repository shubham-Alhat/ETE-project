export type Option = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: number;
  question: string;
  options: Option[];
};

export type Unit = {
  id: string;
  name: string;
  questions: Question[];
};

export const units: Unit[] = [
  {
    id: "unit1",
    name: "Unit 1: ADVANCE PROCESSORS",
    questions: [
      {
        id: 1,
        question: "Main processor chip in computers is :",
        options: [
          { id: "a", text: "ASIC", isCorrect: false },
          { id: "b", text: "ASAP", isCorrect: false },
          { id: "c", text: "CPU.", isCorrect: true },
          { id: "d", text: "CPLD", isCorrect: false },
        ],
      },
      {
        id: 2,
        question: "ARM stands for:",
        options: [
          { id: "a", text: "Advanced RateMachines", isCorrect: false },
          { id: "b", text: "Advanced RISC Machines.", isCorrect: true },
          { id: "c", text: "Artificial RunningMachines", isCorrect: false },
          { id: "d", text: "Aviary Running Machines ", isCorrect: false },
        ],
      },
      {
        id: 3,
        question: "The CISC stands for:",
        options: [
          {
            id: "a",
            text: "Computer Instruction SetCompliment",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Complete Instruction SetCompliment",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Computer Indexed Set Components",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Complex Instructions Set Computer",
            isCorrect: true,
          },
        ],
      },
      {
        id: 4,
        question: "The GPIO stands for:",
        options: [
          {
            id: "a",
            text: "General Purpose Input OutputPropeller",
            isCorrect: false,
          },
          {
            id: "b",
            text: "General Purpose Input Output pins.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "General Purpose Interested Old People",
            isCorrect: false,
          },
          { id: "d", text: "General Purpose Input Output ", isCorrect: false },
        ],
      },
      {
        id: 5,
        question: "The IDE stands for:",
        options: [
          { id: "a", text: "In DeepEnvironment", isCorrect: false },
          {
            id: "b",
            text: "Integrated Development Environment",
            isCorrect: true,
          },
          { id: "c", text: "Internal DeepEscape", isCorrect: false },
          { id: "d", text: "IDE", isCorrect: false },
        ],
      },
      {
        id: 6,
        question: "A program written with the IDE for Arduino is called",
        options: [
          { id: "a", text: "IDEsource", isCorrect: false },
          { id: "b", text: "Sketch", isCorrect: true },
          { id: "c", text: "Cryptography", isCorrect: false },
          { id: "d", text: "Sourcecode", isCorrect: false },
        ],
      },
      {
        id: 7,
        question: "Arduino IDE consists of 2 functions. What are they?",
        options: [
          { id: "a", text: "Build() andloop()", isCorrect: false },
          { id: "b", text: "Setup() and build().", isCorrect: false },
          { id: "c", text: "Setup() and loop()", isCorrect: true },
          { id: "d", text: "Loop() and build and setup()", isCorrect: false },
        ],
      },
      {
        id: 8,
        question: "ALU of ARM7TDMI is bit.",
        options: [
          { id: "a", text: "8", isCorrect: false },
          { id: "b", text: "32", isCorrect: true },
          { id: "c", text: "64", isCorrect: false },
          { id: "d", text: "10", isCorrect: false },
        ],
      },
      {
        id: 9,
        question: "How many digital pins are there on the UNO board?",
        options: [
          { id: "a", text: "14", isCorrect: true },
          { id: "b", text: "12", isCorrect: false },
          { id: "c", text: "16", isCorrect: false },
          { id: "d", text: "20", isCorrect: false },
        ],
      },
      {
        id: 10,
        question: "Most of processors designed by ARM are",
        options: [
          { id: "a", text: "16 bit", isCorrect: false },
          { id: "b", text: "32 bit", isCorrect: true },
          { id: "c", text: "64 bit", isCorrect: false },
          { id: "d", text: "8 bit", isCorrect: false },
        ],
      },
      {
        id: 11,
        question: "The function of link register in ARM7TDMI is",
        options: [
          {
            id: "a",
            text: "To store return address whenever subroutine",
            isCorrect: true,
          },
          { id: "b", text: "To store address of I/Odevice", isCorrect: false },
          {
            id: "c",
            text: "Multiplex the address and datalines",
            isCorrect: false,
          },
          { id: "d", text: "Performaddition", isCorrect: false },
        ],
      },
      {
        id: 12,
        question: "The function of r15 in ARM7TDMI",
        options: [
          { id: "a", text: "Program Counter", isCorrect: true },
          { id: "b", text: "CPSR", isCorrect: false },
          { id: "c", text: "SPSR", isCorrect: false },
          { id: "d", text: "ALU", isCorrect: false },
        ],
      },
      {
        id: 13,
        question: "In the ARM Nomenclature ARMxTDMI ,D and M stands for",
        options: [
          {
            id: "a",
            text: "Debug and Fast Multiplier units are present",
            isCorrect: true,
          },
          {
            id: "b",
            text: "Division and Multiplier units arepresent",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Debugger and Multiplier units are notpresent",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Division and Multiplier units are notpresent",
            isCorrect: false,
          },
        ],
      },
      {
        id: 14,
        question:
          "The computer architecture aimed at reducing the time of execution of instructions is",
        options: [
          { id: "a", text: "CISC", isCorrect: false },
          { id: "b", text: "RISC", isCorrect: true },
          { id: "c", text: "ISA", isCorrect: false },
          { id: "d", text: "ANNA", isCorrect: false },
        ],
      },
      {
        id: 15,
        question: "In CISC processor the nature of instruction size is",
        options: [
          { id: "a", text: "Fixed", isCorrect: false },
          { id: "b", text: "Variable", isCorrect: true },
          { id: "c", text: "Both A andB", isCorrect: false },
          { id: "d", text: "None of theabove", isCorrect: false },
        ],
      },
      {
        id: 16,
        question:
          "If three stages of execution in pipelining are overlapped , how would be the speed of execution?",
        options: [
          { id: "a", text: "Higher", isCorrect: true },
          { id: "b", text: "Moderate", isCorrect: false },
          { id: "c", text: "Lower", isCorrect: false },
          { id: "d", text: "Unpredictable", isCorrect: false },
        ],
      },
      {
        id: 17,
        question:
          "In RISC Processors configuration status of control unitis             ",
        options: [
          { id: "a", text: "Hardwired", isCorrect: true },
          { id: "b", text: "Microprogrammed", isCorrect: false },
          { id: "c", text: "Both A andB", isCorrect: false },
          { id: "d", text: "None of theabove", isCorrect: false },
        ],
      },
      {
        id: 18,
        question:
          "A function is a series of programming statements that can be called by name. Which command is called once when the program starts:",
        options: [
          { id: "a", text: "Loop()", isCorrect: false },
          { id: "b", text: "Setup()", isCorrect: true },
          { id: "c", text: "(output)", isCorrect: false },
          { id: "d", text: "(input)", isCorrect: false },
        ],
      },
      {
        id: 19,
        question: "In ATmega328p ’p’ refers to?",
        options: [
          { id: "a", text: "Production", isCorrect: false },
          { id: "b", text: "Pico-Power", isCorrect: true },
          { id: "c", text: "Peripheral", isCorrect: false },
          { id: "d", text: "Programmable onchip", isCorrect: false },
        ],
      },
      {
        id: 20,
        question: "The throughput of a super scalar processor is",
        options: [
          { id: "a", text: "Less than 1", isCorrect: false },
          { id: "b", text: "1", isCorrect: false },
          { id: "c", text: "More than 1", isCorrect: true },
          { id: "d", text: "Not Known", isCorrect: false },
        ],
      },
      {
        id: 21,
        question:
          "Each stage in pipelining should be completed within _______ cycle.",
        options: [
          { id: "a", text: "1", isCorrect: true },
          { id: "b", text: "2", isCorrect: false },
          { id: "c", text: "3", isCorrect: false },
          { id: "d", text: "4", isCorrect: false },
        ],
      },
      {
        id: 22,
        question:
          "The main importance of ARM micro-processors is providing operation with       ",
        options: [
          {
            id: "a",
            text: "Low cost and low power consumption",
            isCorrect: true,
          },
          { id: "b", text: "Higher degree ofmulti-tasking", isCorrect: false },
          { id: "c", text: "Lower error orglitches", isCorrect: false },
          { id: "d", text: "Efficient memorymanagement", isCorrect: false },
        ],
      },
      {
        id: 23,
        question:
          "In ARM processor when Interrupt occurs ARM processor goes into following mode:",
        options: [
          { id: "a", text: "FIQ mode", isCorrect: true },
          { id: "b", text: "Abort mode", isCorrect: false },
          { id: "c", text: "Supervisor mode", isCorrect: false },
          { id: "d", text: "Undefined mode", isCorrect: false },
        ],
      },
      {
        id: 24,
        question: "The function of barrel shifter is",
        options: [
          {
            id: "a",
            text: "Shift operation in same instruction cycle",
            isCorrect: true,
          },
          {
            id: "b",
            text: "Shift operation in 2 instruction cycle",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Shift operation in 4 instruction cycle",
            isCorrect: false,
          },
          { id: "d", text: "None of the above", isCorrect: false },
        ],
      },
      {
        id: 25,
        question:
          "Evaluate the following statements 1. R13 is traditionally used as the stack pointer and stores the head of the stack in thecurrent processormode 2. R14 is the link register where the core puts the return address on executing asubroutine 3. R15 is the program counter and contains the address of the next instruction to befetched",
        options: [
          { id: "a", text: "All the options are true", isCorrect: true },
          { id: "b", text: "1 and 2 are true", isCorrect: false },
          { id: "c", text: "2 and 3 are true", isCorrect: false },
          { id: "d", text: "1 and 3 are true", isCorrect: false },
        ],
      },
      {
        id: 26,
        question:
          "When the processor is executing simple data processing instructions , the pipeline enables one instruction to be completed every clock cycle, this is also called as",
        options: [
          { id: "a", text: "Throughput", isCorrect: true },
          { id: "b", text: "Latency", isCorrect: false },
          { id: "c", text: "Execution", isCorrect: false },
          { id: "d", text: "None of theabove", isCorrect: false },
        ],
      },
      {
        id: 27,
        question:
          "It starts with a/* and continues until a*/ what does this do?",
        options: [
          { id: "a", text: "Loads a sketch", isCorrect: false },
          { id: "b", text: "Make comments", isCorrect: true },
          { id: "c", text: "Compiles quicker", isCorrect: false },
          { id: "d", text: "Makes stars appear", isCorrect: false },
        ],
      },
      {
        id: 28,
        question:
          "The function used to execute one or many statements , multiple time",
        options: [
          { id: "a", text: "Setup()", isCorrect: false },
          { id: "b", text: "Loop()", isCorrect: true },
          { id: "c", text: "(input)", isCorrect: false },
          { id: "d", text: "(output)", isCorrect: false },
        ],
      },
      {
        id: 29,
        question: "Default bootloader for the Arduino UNO is",
        options: [
          { id: "a", text: "Optiboot loader", isCorrect: true },
          { id: "b", text: "AIR-boot", isCorrect: false },
          { id: "c", text: "Barebox", isCorrect: false },
          { id: "d", text: "GAG", isCorrect: false },
        ],
      },
      {
        id: 30,
        question: "Select proper microcontroller used in Arduino UNO",
        options: [
          { id: "a", text: "ATmega328P", isCorrect: true },
          { id: "b", text: "ATmega2560", isCorrect: false },
          { id: "c", text: "ATmega32114", isCorrect: false },
          { id: "d", text: "AT91SAM3x8E", isCorrect: false },
        ],
      },
      {
        id: 31,
        question: "ATmega64x device has flash memory of --------",
        options: [
          { id: "a", text: "64KB", isCorrect: true },
          { id: "b", text: "32KB", isCorrect: false },
          { id: "c", text: "8KB", isCorrect: false },
          { id: "d", text: "128KB", isCorrect: false },
        ],
      },
      {
        id: 32,
        question: "Number of ports available in ATmega328 are:",
        options: [
          { id: "a", text: "4", isCorrect: false },
          { id: "b", text: "3", isCorrect: true },
          { id: "c", text: "2", isCorrect: false },
          { id: "d", text: "6", isCorrect: false },
        ],
      },
      {
        id: 33,
        question: "AVR do not support code from:",
        options: [
          { id: "a", text: "External Memory", isCorrect: true },
          { id: "b", text: "Internal Memory", isCorrect: false },
          { id: "c", text: "Internal RAM", isCorrect: false },
          { id: "d", text: "Timer", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "unit2",
    name: "Unit 2: RECENT ELECTRONIC COMPONENTS",
    questions: [
      {
        id: 31,
        question:
          "Statement 1: In Li-ion batteries, lithium ions move from the negative electron to the positive the electron during discharge. Statement 2: In Li-ion batteries lithium ions move from positive electron to the negative electrons during charging.",
        options: [
          {
            id: "a",
            text: "Statement 1 is true and statement 2 is false",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Statement 2 is true an statement 1 is false",
            isCorrect: false,
          },
          { id: "c", text: "Both statements are true", isCorrect: true },
          { id: "d", text: "Both statements are false", isCorrect: false },
        ],
      },
      {
        id: 32,
        question: "In Li-ionbatteries, the ________ is/are lithium ion based",
        options: [
          { id: "a", text: "Positive electrode", isCorrect: true },
          { id: "b", text: "Negative electrode", isCorrect: false },
          {
            id: "c",
            text: "Positive and negative electrode",
            isCorrect: false,
          },
          { id: "d", text: "Electrolyte", isCorrect: false },
        ],
      },
      {
        id: 33,
        question:
          "A nuclear battery is a device which uses energy from the ________ to generate electricity",
        options: [
          { id: "a", text: "Hydrocarbon", isCorrect: false },
          { id: "b", text: "Hydrogen", isCorrect: false },
          {
            id: "c",
            text: "Emission of radioactive isotopes",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Chain reaction of radioactive elements",
            isCorrect: false,
          },
        ],
      },
      {
        id: 34,
        question:
          "Compare to other batteries, nuclear batteries are very ________ , but have extremely _________ and high energy density",
        options: [
          { id: "a", text: "Cheap, long life", isCorrect: false },
          { id: "b", text: "Costly, long life", isCorrect: true },
          { id: "c", text: "Cheap, short life", isCorrect: false },
          { id: "d", text: "Costly, short life", isCorrect: false },
        ],
      },
      {
        id: 35,
        question:
          "Surface Mount Technology(SMT) is a method for production in which the components are mounted or placed directly on the surface of",
        options: [
          {
            id: "a",
            text: "Electric circuit, electric board",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Electronic circuit, printed circuit board",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Pneumatic circuit, pneumatic bench",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Instrumentation circuit for control panel",
            isCorrect: false,
          },
        ],
      },
      {
        id: 36,
        question: "OLED stands for",
        options: [
          { id: "a", text: "Organic light emitting display", isCorrect: false },
          { id: "b", text: "Optical light emitting display", isCorrect: false },
          { id: "c", text: "Organic light emitting diode", isCorrect: true },
          { id: "d", text: "Optical light emitting diode", isCorrect: false },
        ],
      },
      {
        id: 37,
        question: "In OLED at least one of the electrode is",
        options: [
          { id: "a", text: "Reactive", isCorrect: false },
          { id: "b", text: "Transparent", isCorrect: true },
          { id: "c", text: "Passive", isCorrect: false },
          { id: "d", text: "Idle", isCorrect: false },
        ],
      },
      {
        id: 38,
        question:
          "OLED are used to create digital display in devices such as                       ",
        options: [
          { id: "a", text: "Only TV screens", isCorrect: false },
          { id: "b", text: "Only smartphones", isCorrect: false },
          { id: "c", text: "Only computer & monitors", isCorrect: false },
          { id: "d", text: "All of above", isCorrect: true },
        ],
      },
      {
        id: 39,
        question:
          "Statement 1: An OLED display works without an backlite. Statement 2: Because OLED emits visible light",
        options: [
          {
            id: "a",
            text: "Statement 1 is true and statement 2 is false",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Statement 2 is true an statement 1 is false",
            isCorrect: false,
          },
          { id: "c", text: "Both statements are true", isCorrect: true },
          { id: "d", text: "Both statements are false", isCorrect: false },
        ],
      },
      {
        id: 40,
        question: "Memristor is defined by relation                   ",
        options: [
          { id: "a", text: "dⱷ=m*dq", isCorrect: true },
          { id: "b", text: "dp=c*dv", isCorrect: false },
          { id: "c", text: "dⱷ=l*di", isCorrect: false },
          { id: "d", text: "dv=r*di", isCorrect: false },
        ],
      },
      {
        id: 41,
        question:
          "The surface mount components are accurately placed onto the pads with the help of                ",
        options: [
          { id: "a", text: "Peak and place machine", isCorrect: true },
          { id: "b", text: "Manually", isCorrect: false },
          { id: "c", text: "Reflow machine", isCorrect: false },
          { id: "d", text: "Printing machine", isCorrect: false },
        ],
      },
      {
        id: 42,
        question:
          "Desirable features of electronics components suitable of emerging application is",
        options: [
          { id: "a", text: "High power consumption", isCorrect: false },
          { id: "b", text: "Miniature size", isCorrect: true },
          { id: "c", text: "Lower operation speed", isCorrect: false },
          { id: "d", text: "Low operating frequency", isCorrect: false },
        ],
      },
      {
        id: 43,
        question:
          "_________ allows more number of components placing on both sides of the flexible dielectric",
        options: [
          { id: "a", text: "Single sided flexible circuit", isCorrect: false },
          {
            id: "b",
            text: "Single mounted flexible circuit",
            isCorrect: false,
          },
          { id: "c", text: "Double excess flexible circuit", isCorrect: false },
          { id: "d", text: "Sculptured flex circuit", isCorrect: true },
        ],
      },
      {
        id: 44,
        question:
          "Memristor features unique properties like ______ and ________",
        options: [
          { id: "a", text: "Non-volatile nature, linearity", isCorrect: false },
          { id: "b", text: "Volatile nature, non-linearity", isCorrect: false },
          { id: "c", text: "Volatile nature, linearity", isCorrect: false },
          {
            id: "d",
            text: "Non-volatile nature, non-linearity",
            isCorrect: true,
          },
        ],
      },
      {
        id: 45,
        question: "_______ is considered as a subset of memristor",
        options: [
          { id: "a", text: "ROM", isCorrect: false },
          { id: "b", text: "ReRAM / RRAM", isCorrect: true },
          { id: "c", text: "Static RAM", isCorrect: false },
          { id: "d", text: "DRAM", isCorrect: false },
        ],
      },
      {
        id: 46,
        question:
          "Hysteresis loop and _____ phase shift between current and voltage, at _____ are the significant features of memristor",
        options: [
          { id: "a", text: "0°, 0 crossing", isCorrect: true },
          { id: "b", text: "90°, 0 crossing", isCorrect: false },
          { id: "c", text: "45°, non 0 crossing", isCorrect: false },
          { id: "d", text: "180°, non 0 crossing", isCorrect: false },
        ],
      },
      {
        id: 47,
        question:
          "Memristor shows _______ relation between voltage and current",
        options: [
          { id: "a", text: "Liner", isCorrect: false },
          { id: "b", text: "Non liner", isCorrect: true },
          { id: "c", text: "Exponential", isCorrect: false },
          { id: "d", text: "Logarithmic", isCorrect: false },
        ],
      },
      {
        id: 48,
        question: "Currently OLED displays are made by",
        options: [
          {
            id: "a",
            text: "Evaporating gases in vacuum chamber",
            isCorrect: true,
          },
          {
            id: "b",
            text: "Evaporating liquid in vacuum chamber",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Evaporating solid in vacuum chamber",
            isCorrect: false,
          },
          { id: "d", text: "Anodization", isCorrect: false },
        ],
      },
      {
        id: 49,
        question:
          "OLED displays are simpler than LCD they do not require ________ or _______",
        options: [
          { id: "a", text: "Power, filtering", isCorrect: false },
          { id: "b", text: "Power, diffusing", isCorrect: false },
          { id: "c", text: "Backlight, filtering", isCorrect: false },
          { id: "d", text: "Backlight, diffusing", isCorrect: true },
        ],
      },
      {
        id: 50,
        question:
          "In the cover lay of FPC, to reduce conductor damage from frequent bending the thickness of the cover lay should be                           ",
        options: [
          {
            id: "a",
            text: "Same as the thickness of the dielectric layer",
            isCorrect: false,
          },
          {
            id: "b",
            text: "More than the thickness of the dielectriclayer",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Less than the thickness of the dielectric layer",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Independent of the thickness of the dielectriclayer",
            isCorrect: false,
          },
        ],
      },
      {
        id: 51,
        question: "In SMT technology AOI stands for-------",
        options: [
          { id: "a", text: "Auto Optical Information", isCorrect: false },
          { id: "b", text: "Automatic Optic Inspection", isCorrect: true },
          {
            id: "c",
            text: "Arithmetic Original Information",
            isCorrect: false,
          },
          { id: "d", text: "All Outstanding Information", isCorrect: false },
        ],
      },
      {
        id: 52,
        question: "SMT is unsuitable for-----------",
        options: [
          { id: "a", text: "SmallCapacitors", isCorrect: false },
          { id: "b", text: "SmallTransistors", isCorrect: false },
          { id: "c", text: "Transformers", isCorrect: true },
          { id: "d", text: "Resistors", isCorrect: false },
        ],
      },
      {
        id: 53,
        question: "Two electrodes used in OLED are –",
        options: [
          {
            id: "a",
            text: "Graphite anode & GraphiteCathode",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Non metallic anode and Licathode",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Metallic cathode & Transparent anode",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Nuclear anode and Nuclearcathode",
            isCorrect: false,
          },
        ],
      },
      {
        id: 54,
        question: "Memristor establishes a relation between—",
        options: [
          { id: "a", text: "flux and electric charge", isCorrect: true },
          { id: "b", text: "voltage and current", isCorrect: false },
          { id: "c", text: "charge and voltage", isCorrect: false },
          { id: "d", text: "flux and current", isCorrect: false },
        ],
      },
      {
        id: 55,
        question: "Material used as cathode for Ni-Cd battery is:",
        options: [
          { id: "a", text: "Cadmium hydroxide", isCorrect: false },
          { id: "b", text: "Potassium hydroxide", isCorrect: false },
          { id: "c", text: "Nickel hydroxide", isCorrect: true },
          { id: "d", text: "Graphite", isCorrect: false },
        ],
      },
      {
        id: 56,
        question: "Material used as anode for Ni-Cd battery is:",
        options: [
          { id: "a", text: "Cadmium hydroxide", isCorrect: true },
          { id: "b", text: "Potassium hydroxide", isCorrect: false },
          { id: "c", text: "Nickel hydroxide", isCorrect: false },
          { id: "d", text: "Lithium metaloxide", isCorrect: false },
        ],
      },
      {
        id: 57,
        question: "Material used as anode for Li-ion battery is:",
        options: [
          { id: "a", text: "Graphite", isCorrect: true },
          { id: "b", text: "Potassium hydroxide", isCorrect: false },
          { id: "c", text: "Nickel hydroxide", isCorrect: false },
          { id: "d", text: "Lithium metaloxide", isCorrect: false },
        ],
      },
      {
        id: 58,
        question: "Li –ion batteries convert ---",
        options: [
          {
            id: "a",
            text: "Sound waves into electrical signals",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Chemical energy into electrical energy",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Audio signals into video signals",
            isCorrect: false,
          },
          { id: "d", text: "Light energy into heat energy", isCorrect: false },
        ],
      },
      {
        id: 59,
        question:
          "Rolled annealed copper foils offer--------------resistance to continuous flexing.",
        options: [
          { id: "a", text: "High", isCorrect: false },
          { id: "b", text: "Low", isCorrect: true },
          { id: "c", text: "Negligible", isCorrect: false },
          { id: "d", text: "Medium", isCorrect: false },
        ],
      },
      {
        id: 60,
        question:
          "In batteries positive electrode is termed as _______ and negative electrode is termed as _______.",
        options: [
          { id: "a", text: "anode, cathode", isCorrect: false },
          { id: "b", text: "cathode, anode", isCorrect: true },
          { id: "c", text: "terminal, lead", isCorrect: false },
          { id: "d", text: "lead, electrolyte", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "unit3",
    name: "Unit 3: NEXT GENERATION TELECOM NETWORK",
    questions: [
      {
        id: 61,
        question: "In NGN , the interface not supporting media interaction is",
        options: [
          { id: "a", text: "UNI", isCorrect: false },
          { id: "b", text: "ANI", isCorrect: false },
          { id: "c", text: "NNI", isCorrect: true },
          { id: "d", text: "SNI", isCorrect: false },
        ],
      },
      {
        id: 62,
        question: "Number of layers in NGN architecture are",
        options: [
          { id: "a", text: "7", isCorrect: false },
          { id: "b", text: "6", isCorrect: false },
          { id: "c", text: "5", isCorrect: false },
          { id: "d", text: "4", isCorrect: true },
        ],
      },
      {
        id: 63,
        question: "Layers of NGN are",
        options: [
          {
            id: "a",
            text: "Access, Transport, Control, Service layer",
            isCorrect: true,
          },
          {
            id: "b",
            text: "Physical ,Data link, Network, Sessionlayer",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Application, session, Data link, Network, Transportlayer",
            isCorrect: false,
          },
          { id: "d", text: "Network, Applicationlayer", isCorrect: false },
        ],
      },
      {
        id: 64,
        question: "In NGN, CDF(Content Delivery Function ) is a function of",
        options: [
          { id: "a", text: "Transport Stratum", isCorrect: false },
          { id: "b", text: "Service Stratum", isCorrect: true },
          { id: "c", text: "Transport and Service Stratum", isCorrect: false },
          { id: "d", text: "Not from above", isCorrect: false },
        ],
      },
      {
        id: 65,
        question: "----------------MULTIPLEXING IS USED IN 3G.",
        options: [
          { id: "a", text: "FDMA", isCorrect: false },
          { id: "b", text: "CDMA", isCorrect: true },
          { id: "c", text: "TDMA", isCorrect: false },
          { id: "d", text: "NOT from above", isCorrect: false },
        ],
      },
      {
        id: 66,
        question: "Data speed in 5G is ----",
        options: [
          { id: "a", text: "More than 1Gbps", isCorrect: true },
          { id: "b", text: "64 Kbps", isCorrect: false },
          { id: "c", text: "2Mbps", isCorrect: false },
          { id: "d", text: "4Kbps", isCorrect: false },
        ],
      },
      {
        id: 67,
        question: "In NGN , URL stands for",
        options: [
          {
            id: "a",
            text: "Unified / Uniform Resource Locator",
            isCorrect: true,
          },
          { id: "b", text: "Universal  Regional Line", isCorrect: false },
          { id: "c", text: "Universal Rectified level", isCorrect: false },
          { id: "d", text: "Unified Range Locator", isCorrect: false },
        ],
      },
      {
        id: 68,
        question: "1 Guses----------technology.",
        options: [
          { id: "a", text: "Digital", isCorrect: false },
          { id: "b", text: "CDMA", isCorrect: false },
          { id: "c", text: "WiMax", isCorrect: false },
          { id: "d", text: "Analog", isCorrect: true },
        ],
      },
      {
        id: 69,
        question: "Only circuit switching is used by----",
        options: [
          { id: "a", text: "3G", isCorrect: false },
          { id: "b", text: "5G", isCorrect: false },
          { id: "c", text: "4G", isCorrect: false },
          { id: "d", text: "1G", isCorrect: true },
        ],
      },
      {
        id: 70,
        question: "Maximum speed up to 2 Mbps is provided by",
        options: [
          { id: "a", text: "3G", isCorrect: true },
          { id: "b", text: "4G", isCorrect: false },
          { id: "c", text: "5G", isCorrect: false },
          { id: "d", text: "1G", isCorrect: false },
        ],
      },
      {
        id: 71,
        question: "Unlicensed radio band ISM stands for",
        options: [
          { id: "a", text: "Industrial, Scientific,Medical", isCorrect: true },
          { id: "b", text: "Indian, Standard,Meter", isCorrect: false },
          { id: "c", text: "Indian ,Standard,Mobile", isCorrect: false },
          { id: "d", text: "Industrial, Standard, Measure", isCorrect: false },
        ],
      },
      {
        id: 72,
        question:
          "In licensed radio band , allocated frequency band for FM broadcast is",
        options: [
          { id: "a", text: "148.5 KHz to 283.5 KHz", isCorrect: false },
          { id: "b", text: "87.5 MHz to 108.0 MHz", isCorrect: true },
          { id: "c", text: "87.5 KHz to 108.0 MHz", isCorrect: false },
          { id: "d", text: "840 MHz to 900 MHz", isCorrect: false },
        ],
      },
      {
        id: 73,
        question: "WPC Wireless Planning and Coordination is responsible for :",
        options: [
          {
            id: "a",
            text: "Frequency spectrum management including licensing and needs of users",
            isCorrect: true,
          },
          {
            id: "b",
            text: "Providing information resources",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Managing and setting standards for spectrum use",
            isCorrect: false,
          },
          { id: "d", text: "Creating standard for WLAN", isCorrect: false },
        ],
      },
      {
        id: 74,
        question: "Line side interface to the core IP network is supported by",
        options: [
          { id: "a", text: "Trunk Media Gateway", isCorrect: false },
          { id: "b", text: "Signaling gateway", isCorrect: false },
          { id: "c", text: "Access gateway", isCorrect: true },
          { id: "d", text: "Access network", isCorrect: false },
        ],
      },
      {
        id: 75,
        question:
          "The connectivity between customer premises equipment and access gateway in the service provider’s network is provided by",
        options: [
          { id: "a", text: "Trunk Media Gateway", isCorrect: false },
          { id: "b", text: "Signaling gateway", isCorrect: false },
          { id: "c", text: "Access gateway", isCorrect: false },
          { id: "d", text: "Access network", isCorrect: true },
        ],
      },
      {
        id: 76,
        question:
          "The E2E optical path in an OTN network is specified by layer :",
        options: [
          { id: "a", text: "ODU", isCorrect: false },
          { id: "b", text: "OTU", isCorrect: false },
          { id: "c", text: "OCH", isCorrect: true },
          { id: "d", text: "OPU", isCorrect: false },
        ],
      },
      {
        id: 77,
        question: "In NGN communication is possible",
        options: [
          { id: "a", text: "Within a city", isCorrect: false },
          { id: "b", text: "Within a state", isCorrect: false },
          { id: "c", text: "Within a country", isCorrect: false },
          { id: "d", text: "Anywhere in world", isCorrect: true },
        ],
      },
      {
        id: 78,
        question:
          "A wavelength range of the XG-PONI downstream signal and the range of upstream signal on a single fiber system are",
        options: [
          { id: "a", text: "Same", isCorrect: false },
          {
            id: "b",
            text: "For downstream signal wavelength is greater than that of upstream signal",
            isCorrect: true,
          },
          {
            id: "c",
            text: "For downstream signal wavelength is lower than that of upstream signal",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Depends on application it varies",
            isCorrect: false,
          },
        ],
      },
      {
        id: 79,
        question: " MPLS header length is a field of-------------bits.",
        options: [
          { id: "a", text: "32", isCorrect: true },
          { id: "b", text: "24", isCorrect: false },
          { id: "c", text: "20", isCorrect: false },
          { id: "d", text: "8", isCorrect: false },
        ],
      },
      {
        id: 80,
        question: "8000 frames/sec are transmitted in 125 μsec ,in",
        options: [
          { id: "a", text: "STM-4", isCorrect: false },
          { id: "b", text: "STM-64", isCorrect: false },
          { id: "c", text: "STM-1", isCorrect: true },
          { id: "d", text: "STM-256", isCorrect: false },
        ],
      },
      {
        id: 81,
        question: "The use of EXP(Experimental) bits are",
        options: [
          { id: "a", text: "Quality of service", isCorrect: true },
          {
            id: "b",
            text: "Avoid a packet being stuck in a routingloop",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Receiving, transmitting a labeled packet on a datalink.",
            isCorrect: false,
          },
          { id: "d", text: "Not fromabove", isCorrect: false },
        ],
      },
      {
        id: 82,
        question: "The protection scheme in an OTN network is defined by ",
        options: [
          { id: "a", text: "G-709", isCorrect: false },
          { id: "b", text: "G-873.1", isCorrect: true },
          { id: "c", text: "G-798", isCorrect: false },
          { id: "d", text: "G-872", isCorrect: false },
        ],
      },
      {
        id: 83,
        question: "SDH is-------------------",
        options: [
          { id: "a", text: "Session layer protocol", isCorrect: false },
          { id: "b", text: "Transport layer protocol", isCorrect: true },
          { id: "c", text: "Service protocol", isCorrect: false },
          { id: "d", text: "Application protocol", isCorrect: false },
        ],
      },
      {
        id: 84,
        question: "TTL in a MPLS label is",
        options: [
          { id: "a", text: "Transistor Transistor Logic", isCorrect: false },
          { id: "b", text: "Time to Live", isCorrect: true },
          { id: "c", text: "Technology Transfer Layer", isCorrect: false },
          { id: "d", text: "Not from above", isCorrect: false },
        ],
      },
      {
        id: 85,
        question:
          "In OTN network, Characteristics of optical transport network hierarchy equipment functional blocks is defined by:",
        options: [
          { id: "a", text: "G-872", isCorrect: false },
          { id: "b", text: "G-709", isCorrect: false },
          { id: "c", text: "G-873.1", isCorrect: false },
          { id: "d", text: "G-798", isCorrect: true },
        ],
      },
      {
        id: 86,
        question: "In B-PON optical network B stands for:",
        options: [
          { id: "a", text: "Binary", isCorrect: false },
          { id: "b", text: "Broadband", isCorrect: true },
          { id: "c", text: "Bipolar", isCorrect: false },
          { id: "d", text: "Big", isCorrect: false },
        ],
      },
      {
        id: 87,
        question:
          "High bit rate, network management and protection facility is provided by:",
        options: [
          { id: "a", text: "SDH", isCorrect: false },
          { id: "b", text: "WDM", isCorrect: false },
          { id: "c", text: "DWDM", isCorrect: false },
          { id: "d", text: "OTN", isCorrect: true },
        ],
      },
      {
        id: 88,
        question:
          "In OTN standard frame format and payload mapping is provided by:----",
        options: [
          { id: "a", text: "G-878", isCorrect: false },
          { id: "b", text: "G-709", isCorrect: true },
          { id: "c", text: "G-798", isCorrect: false },
          { id: "d", text: "G-873.1", isCorrect: false },
        ],
      },
      {
        id: 89,
        question:
          "Client signal encapsulation in OTN layer is function of:-----------",
        options: [
          { id: "a", text: "OCH", isCorrect: false },
          { id: "b", text: "OTU", isCorrect: false },
          { id: "c", text: "ODU", isCorrect: false },
          { id: "d", text: "OPU", isCorrect: true },
        ],
      },
      {
        id: 90,
        question: "OTN supports internal switching at:----------",
        options: [
          { id: "a", text: "300Mbps", isCorrect: false },
          { id: "b", text: "1.25Gbps", isCorrect: true },
          { id: "c", text: "1.25 Mbps", isCorrect: false },
          { id: "d", text: "200 Kbps", isCorrect: false },
        ],
      },
      {
        id: 91,
        question:
          "In MPLS Header field, number of bits used for TTL are---------------",
        options: [
          { id: "a", text: "1", isCorrect: false },
          { id: "b", text: "20", isCorrect: false },
          { id: "c", text: "3", isCorrect: false },
          { id: "d", text: "8", isCorrect: true },
        ],
      },
      {
        id: 92,
        question: "In MPLS Header field BOS stands for:-",
        options: [
          { id: "a", text: "Bits of service", isCorrect: false },
          { id: "b", text: "Bits on Stack", isCorrect: false },
          { id: "c", text: "Binary on shift", isCorrect: false },
          { id: "d", text: "Bottom of Stack", isCorrect: true },
        ],
      },
      {
        id: 93,
        question: "Digital broadcast service is a example of:-",
        options: [
          { id: "a", text: "Asymmetric broadband service", isCorrect: true },
          { id: "b", text: "Symmetric broadband service", isCorrect: false },
          { id: "c", text: "Asynchronous service", isCorrect: false },
          { id: "d", text: "Parallel transmission service", isCorrect: false },
        ],
      },
      {
        id: 94,
        question: "In NGN core MPLS stands for:---------",
        options: [
          { id: "a", text: "Medium Port Line Standard", isCorrect: false },
          { id: "b", text: "Multi Port Line Switching", isCorrect: false },
          { id: "c", text: "Multi Protocol Label Switching", isCorrect: true },
          { id: "d", text: "Mega Print Line Simulation", isCorrect: false },
        ],
      },
      {
        id: 95,
        question:
          "In FTTx Network Architecture ONU and OLT are connected through:-",
        options: [
          { id: "a", text: "Wirelessly", isCorrect: false },
          { id: "b", text: "Copper Cable", isCorrect: false },
          { id: "c", text: "Fibre Cable", isCorrect: true },
          { id: "d", text: "Not above", isCorrect: false },
        ],
      },
      {
        id: 96,
        question:
          "-----------------is a driver for the deployment of advanced optoelectronics technologies.",
        options: [
          { id: "a", text: "NGNC", isCorrect: false },
          { id: "b", text: "GSM", isCorrect: false },
          { id: "c", text: "FTTH", isCorrect: true },
          { id: "d", text: "WCDMA", isCorrect: false },
        ],
      },
      {
        id: 97,
        question:
          "Interface over SNI to service nodes and to the PON is provided by:--------",
        options: [
          { id: "a", text: "ONU", isCorrect: false },
          { id: "b", text: "OLT", isCorrect: true },
          { id: "c", text: "NGN", isCorrect: false },
          { id: "d", text: "NT", isCorrect: false },
        ],
      },
      {
        id: 98,
        question:
          "In FTTH architecture generally in upstream,-----------------protocol is required.",
        options: [
          { id: "a", text: "CDMA", isCorrect: false },
          { id: "b", text: "FDMA", isCorrect: false },
          { id: "c", text: "WDMA", isCorrect: false },
          { id: "d", text: "TDMA", isCorrect: true },
        ],
      },
      {
        id: 99,
        question: "In MPLS Network not labeled packets are received by:-",
        options: [
          { id: "a", text: "Intermediate LSR", isCorrect: false },
          { id: "b", text: "IngressLSR", isCorrect: true },
          { id: "c", text: "EgressLSR", isCorrect: false },
          { id: "d", text: "None of theabove", isCorrect: false },
        ],
      },
      {
        id: 100,
        question: "In MPLS Header field, Label field length is:----",
        options: [
          { id: "a", text: "32 bits", isCorrect: false },
          { id: "b", text: "8 bits", isCorrect: false },
          { id: "c", text: "1 bit", isCorrect: false },
          { id: "d", text: "20 bits", isCorrect: true },
        ],
      },
      {
        id: 101,
        question:
          "In SDH system, if STM-1 has bandwidth of 150,336kbps/sec then calculate bandwidth for STM-64.",
        options: [
          { id: "a", text: "1202688", isCorrect: false },
          { id: "b", text: "2405376", isCorrect: false },
          { id: "c", text: "9621504", isCorrect: true },
          { id: "d", text: "Same asSTM-1", isCorrect: false },
        ],
      },
      {
        id: 102,
        question:
          "In passive optical network, bandwidth requirements of business and residential services is supported by:----",
        options: [
          { id: "a", text: "GPON", isCorrect: true },
          { id: "b", text: "BPON", isCorrect: false },
          { id: "c", text: "DPON", isCorrect: false },
          { id: "d", text: "None ofabove", isCorrect: false },
        ],
      },
      {
        id: 103,
        question:
          "In passive optical network bandwidth requirements of narrowband and broadband services is supported by:----",
        options: [
          { id: "a", text: "GPON", isCorrect: false },
          { id: "b", text: "BPON", isCorrect: true },
          { id: "c", text: "DPON", isCorrect: false },
          { id: "d", text: "None ofabove", isCorrect: false },
        ],
      },
      {
        id: 104,
        question: "XG-PON is also described as-----------------in IEEE(802.3)",
        options: [
          { id: "a", text: "1G-EPON", isCorrect: false },
          { id: "b", text: "3G-EPON", isCorrect: false },
          { id: "c", text: "4G-EPON", isCorrect: false },
          { id: "d", text: "10G-EPON", isCorrect: true },
        ],
      },
      {
        id: 105,
        question:
          "1 G class PON, 10 G class PON and video distribution services can co-exist on the same ODN because their-------------------------",
        options: [
          { id: "a", text: "Transmission costs areequal", isCorrect: false },
          {
            id: "b",
            text: "Voltage and current levels aresame",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Downstream signals use different wavelengths",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Downstream signals use same wavelengths",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    id: "unit4",
    name: "Unit 4: Digital Factory",
    questions: [
      {
        id: 31,
        question: "Precision Agriculture is about",
        options: [
          {
            id: "a",
            text: "Weather Forecasting andmanagement",
            isCorrect: false,
          },
          { id: "b", text: "Adequate crop water management", isCorrect: true },
          { id: "c", text: "Pest Mangement and control", isCorrect: false },
          {
            id: "d",
            text: "Food Monitoring and safety management",
            isCorrect: false,
          },
        ],
      },
      {
        id: 32,
        question:
          "Aircraft or satellite manufacturing is an example of discrete manufacturing with",
        options: [
          { id: "a", text: "High Complexity and Low volume", isCorrect: true },
          { id: "b", text: "Low Complexity and high volume", isCorrect: false },
          { id: "c", text: "Low complexity and low volume", isCorrect: false },
          { id: "d", text: "High complexity high volume", isCorrect: false },
        ],
      },
      {
        id: 33,
        question: "Challenges for discrete manufacturing industry are:",
        options: [
          { id: "a", text: "Only connected products", isCorrect: false },
          { id: "b", text: "Only connected supply chain", isCorrect: false },
          { id: "c", text: "Only smart manufacturing", isCorrect: false },
          { id: "d", text: "All of above", isCorrect: true },
        ],
      },
      {
        id: 34,
        question:
          "To model the driving behavior and to detect driving patterns such as sharp turns, sudden acceleration, hard braking, drifting and speeding sensors used in automotive are",
        options: [
          {
            id: "a",
            text: "GPS, Gyroscope, orientation sensors, and accelerometer",
            isCorrect: true,
          },
          {
            id: "b",
            text: "Voice, face print or fingerprint",
            isCorrect: false,
          },
          { id: "c", text: "Emission, mileage sensor", isCorrect: false },
          {
            id: "d",
            text: "Ultrasonic sensor, pressure and temperature sensor",
            isCorrect: false,
          },
        ],
      },
      {
        id: 35,
        question: "Gateways are used to:",
        options: [
          { id: "a", text: "Consolidate data from sensors", isCorrect: false },
          {
            id: "b",
            text: "Route it to relevant data system",
            isCorrect: false,
          },
          {
            id: "c",
            text: "If problem encountered return to the device",
            isCorrect: false,
          },
          { id: "d", text: "All of above", isCorrect: true },
        ],
      },
      {
        id: 36,
        question: "What is the name of first recognized IoT Device?",
        options: [
          { id: "a", text: "ATM", isCorrect: true },
          { id: "b", text: "Smart Watch", isCorrect: false },
          { id: "c", text: "Radio", isCorrect: false },
          { id: "d", text: "VideoGame", isCorrect: false },
        ],
      },
      {
        id: 37,
        question:
          "The digital factory represents an engineering system that mainly consists of three aspects",
        options: [
          {
            id: "a",
            text: "intercommunication, collaboration and execution",
            isCorrect: false,
          },
          {
            id: "b",
            text: "interconnection, communication and execution",
            isCorrect: false,
          },
          {
            id: "c",
            text: "interconnection, collaboration and execution",
            isCorrect: true,
          },
          {
            id: "d",
            text: "interconnection, collaboration and expansion",
            isCorrect: false,
          },
        ],
      },
      {
        id: 38,
        question: "Industries that implement IoT",
        options: [
          { id: "a", text: "Healthcare", isCorrect: false },
          { id: "b", text: "Finance", isCorrect: false },
          { id: "c", text: "Retail and Manufacturing", isCorrect: false },
          { id: "d", text: "All of above", isCorrect: true },
        ],
      },
      {
        id: 39,
        question:
          "_______ stage in IoT performs data preprocessing and enhanced analytics",
        options: [
          { id: "a", text: "First Stage", isCorrect: false },
          { id: "b", text: "Second Stage", isCorrect: true },
          { id: "c", text: "Third Stage", isCorrect: false },
          { id: "d", text: "Fourth Stage", isCorrect: false },
        ],
      },
      {
        id: 40,
        question: "-----------is the author of The Fourth Industrial Evolution",
        options: [
          { id: "a", text: "Professor ClaudSchwaz", isCorrect: false },
          { id: "b", text: "Professor KlausSchwab", isCorrect: true },
          { id: "c", text: "Professor KlausSchwaz", isCorrect: false },
          { id: "d", text: "Professor KloffSchwab", isCorrect: false },
        ],
      },
      {
        id: 41,
        question: "Vehicular systems can be a sample example of",
        options: [
          { id: "a", text: "IIoT", isCorrect: false },
          { id: "b", text: "RAMI4.0", isCorrect: false },
          { id: "c", text: "Cyber Physical System", isCorrect: true },
          { id: "d", text: "PLCSCADA", isCorrect: false },
        ],
      },
      {
        id: 42,
        question: "The IoT has features like",
        options: [
          { id: "a", text: "Full perception", isCorrect: false },
          { id: "b", text: "reliable transmission", isCorrect: false },
          { id: "c", text: "intelligentprocessing", isCorrect: false },
          { id: "d", text: "All of Above", isCorrect: true },
        ],
      },
      {
        id: 43,
        question:
          "-------------------is the direct contact between two smart objects when they shareinformation instantaneously without intermediaries",
        options: [
          { id: "a", text: "Device to Device", isCorrect: true },
          { id: "b", text: "Device to Gateway", isCorrect: false },
          { id: "c", text: "Gateway to data systems", isCorrect: false },
          { id: "d", text: "Between Data systems", isCorrect: false },
        ],
      },
      {
        id: 44,
        question: "Edge Gateway function is to",
        options: [
          {
            id: "a",
            text: "Interface between cloud and sensornetwork",
            isCorrect: true,
          },
          { id: "b", text: "Data Management", isCorrect: false },
          { id: "c", text: "Collect data from things", isCorrect: false },
          { id: "d", text: "Supervise the CPS system", isCorrect: false },
        ],
      },
      {
        id: 45,
        question:
          "Along with the increasing urbanization the second industrial revolution lead to the inventions of:",
        options: [
          { id: "a", text: "Electric Lightening", isCorrect: false },
          { id: "b", text: "Radio", isCorrect: false },
          { id: "c", text: "Telephones", isCorrect: false },
          { id: "d", text: "All of Above", isCorrect: true },
        ],
      },
      {
        id: 46,
        question: "On Board Diagnostics OBD gives alerts like:",
        options: [
          { id: "a", text: "OpenDoors", isCorrect: false },
          { id: "b", text: "LightOn", isCorrect: false },
          { id: "c", text: "Handbrake", isCorrect: false },
          { id: "d", text: "All of Above", isCorrect: true },
        ],
      },
      {
        id: 47,
        question:
          "Which sensors are easy to interface with a microcontroller using Serial Peripheral Interface (SPI)",
        options: [
          { id: "a", text: "Digital", isCorrect: true },
          { id: "b", text: "Analogue", isCorrect: false },
          { id: "c", text: "Both of the above", isCorrect: false },
          {
            id: "d",
            text: "Any sensors with communication capabilityonly",
            isCorrect: false,
          },
        ],
      },
      {
        id: 48,
        question: "IoT Gateway must provide:",
        options: [
          { id: "a", text: "Protocol Abstraction", isCorrect: true },
          { id: "b", text: "Security with Hardware", isCorrect: false },
          { id: "c", text: "Simple and fast installation", isCorrect: false },
          { id: "d", text: "Data Storage", isCorrect: false },
        ],
      },
      {
        id: 49,
        question: "Gyroscope is a sensor which measures",
        options: [
          { id: "a", text: "Acceleration", isCorrect: false },
          { id: "b", text: "Pressure", isCorrect: false },
          { id: "c", text: "Orientation", isCorrect: true },
          { id: "d", text: "Temperation", isCorrect: false },
        ],
      },
      {
        id: 50,
        question: "Smart Farming can be achieved by",
        options: [
          { id: "a", text: "IoT Stick", isCorrect: false },
          {
            id: "b",
            text: "Automation using irrigation systems",
            isCorrect: true,
          },
          { id: "c", text: "Automated crop harvesting", isCorrect: false },
          {
            id: "d",
            text: "Automation food storage and transport management",
            isCorrect: false,
          },
        ],
      },
      {
        id: 51,
        question:
          " ________ has ability to convert the information obtained from the outer world into data for analysis.",
        options: [
          { id: "a", text: "Sensors", isCorrect: true },
          { id: "b", text: "Actuator", isCorrect: false },
          { id: "c", text: "Cloud", isCorrect: false },
          { id: "d", text: "Server", isCorrect: false },
        ],
      },
      {
        id: 52,
        question: 'Identify which of given are not "things" as per IoT',
        options: [
          { id: "a", text: "SMARTwatch", isCorrect: false },
          { id: "b", text: "People", isCorrect: false },
          { id: "c", text: "SMART Phone", isCorrect: false },
          { id: "d", text: "Protocol", isCorrect: true },
        ],
      },
      {
        id: 53,
        question:
          "Transreceivers transmits ______ data and receive _______ commands.",
        options: [
          { id: "a", text: "sensor,actuator", isCorrect: true },
          { id: "b", text: "things,sensor", isCorrect: false },
          { id: "c", text: "devices,sensors", isCorrect: false },
          { id: "d", text: "sensors,devices", isCorrect: false },
        ],
      },
      {
        id: 54,
        question: '"Actuators" main function is                         ',
        options: [
          {
            id: "a",
            text: "these devices are able to intervene the physical reality",
            isCorrect: true,
          },
          { id: "b", text: "get information", isCorrect: false },
          {
            id: "c",
            text: "Analysis and management of data",
            isCorrect: false,
          },
          { id: "d", text: "Analysis and storage of data", isCorrect: false },
        ],
      },
      {
        id: 55,
        question:
          "Cyber Physical Systems have limited _____ and ______ capabilities due to their tiny size.",
        options: [
          { id: "a", text: "computation, storage", isCorrect: true },
          { id: "b", text: "storage, transmitting", isCorrect: false },
          { id: "c", text: "computation, transmitting", isCorrect: false },
          { id: "d", text: "computation, analysis", isCorrect: false },
        ],
      },
      {
        id: 56,
        question: "An IoT gateway functions are:",
        options: [
          {
            id: "a",
            text: "Forwarding packets between LAN and WAN on the IPlayer",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Enables local, short-range communication between IoTdevices",
            isCorrect: false,
          },
          { id: "c", text: "Both the above", isCorrect: true },
          { id: "d", text: "None of these", isCorrect: false },
        ],
      },
      {
        id: 57,
        question: "RAMI 4.0 is a ________ dimensional architecture",
        options: [
          { id: "a", text: "3", isCorrect: true },
          { id: "b", text: "4", isCorrect: false },
          { id: "c", text: "2", isCorrect: false },
          { id: "d", text: "5", isCorrect: false },
        ],
      },
      {
        id: 58,
        question:
          "Identify which one of the following is not a part of functional layer of RAMI 4.0",
        options: [
          { id: "a", text: "Application Support Layer", isCorrect: false },
          { id: "b", text: "Business Layer", isCorrect: true },
          { id: "c", text: "Assets Layer", isCorrect: false },
          { id: "d", text: "Information Layer", isCorrect: false },
        ],
      },
      {
        id: 59,
        question:
          "Late generation _______ systems developed into first generation _______ systems.",
        options: [
          { id: "a", text: "SCADA, IIoT", isCorrect: true },
          { id: "b", text: "SCADA, IoT", isCorrect: false },
          { id: "c", text: "PLC,IoT", isCorrect: false },
          { id: "d", text: "SCADA,PLC", isCorrect: false },
        ],
      },
      {
        id: 60,
        question:
          "An IoT gateway may also be referred to as an intelligent gateway or _______",
        options: [
          { id: "a", text: "control tier", isCorrect: true },
          { id: "b", text: "control gateway", isCorrect: false },
          { id: "c", text: "SMART gateway", isCorrect: false },
          { id: "d", text: "control layer", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "unit5",
    name: "Unit 5: SmartWorld",
    questions: [
      {
        id: 1,
        question:
          "Control unit in smart home receive all switching signals but switch ON or OFF particular appliance due to-------------",
        options: [
          { id: "a", text: "correct frequency.", isCorrect: false },
          { id: "b", text: "correct code.", isCorrect: true },
          { id: "c", text: "correct name", isCorrect: false },
          { id: "d", text: "correct label", isCorrect: false },
        ],
      },
      {
        id: 2,
        question: "Identify the position sensor:-",
        options: [
          { id: "a", text: "Magnetic sensor", isCorrect: true },
          { id: "b", text: "Both a & c", isCorrect: false },
          { id: "c", text: "Audio sensor", isCorrect: false },
          { id: "d", text: "barometer", isCorrect: false },
        ],
      },
      {
        id: 3,
        question:
          "Name the device that constantly crawls around floors sweeping thedust.",
        options: [
          { id: "a", text: "Hairdryer", isCorrect: false },
          { id: "b", text: "Robotic vacuumcleaner", isCorrect: true },
          { id: "c", text: "Electricoven", isCorrect: false },
          { id: "d", text: "Refrigerator", isCorrect: false },
        ],
      },
      {
        id: 4,
        question: "Type of audiosensors:-",
        options: [
          { id: "a", text: "Microphone", isCorrect: false },
          { id: "b", text: "Lightsensor", isCorrect: false },
          { id: "c", text: "both a &b", isCorrect: false },
          { id: "d", text: "Heart rate sensor", isCorrect: true },
        ],
      },
      {
        id: 5,
        question: "Functions of microphonesare:-",
        options: [
          { id: "a", text: "Playbackaudiosignal", isCorrect: false },
          { id: "b", text: "Detectsacousticsignal", isCorrect: true },
          { id: "c", text: "deal with lightintensity", isCorrect: false },
          { id: "d", text: "provide live videofeeds", isCorrect: false },
        ],
      },
      {
        id: 6,
        question: "The sensor used to adjust the display with motionis:-",
        options: [
          { id: "a", text: "Linearaccelerationsensor", isCorrect: false },
          { id: "b", text: "Camera", isCorrect: false },
          { id: "c", text: "RTD", isCorrect: false },
          { id: "d", text: "proximitysensor", isCorrect: true },
        ],
      },
      {
        id: 7,
        question:
          "low-voltage current flows between two points throughout the home’s entry points,and breaking the circuit will result in loud siren. This isexampleof                              .",
        options: [
          { id: "a", text: "Home entertainmentsystem", isCorrect: false },
          { id: "b", text: "Home security and AlarmSystem.", isCorrect: true },
          { id: "c", text: "Home theatersystem", isCorrect: false },
          { id: "d", text: "home temperature controlsystem", isCorrect: false },
        ],
      },
      {
        id: 8,
        question: "identify the statement which is not suitable forcamera:-",
        options: [
          { id: "a", text: "deals withlightintensity", isCorrect: false },
          { id: "b", text: "deviceambiance", isCorrect: true },
          { id: "c", text: "provide live video feeds", isCorrect: false },
          { id: "d", text: "control automatic lightsystem", isCorrect: false },
        ],
      },
      {
        id: 9,
        question:
          "is used to fix display position by considering magneticfields.",
        options: [
          { id: "a", text: "Lightsensor", isCorrect: false },
          { id: "b", text: "Magneticsensor", isCorrect: true },
          { id: "c", text: "photodiode", isCorrect: false },
          { id: "d", text: "linear accelerationsensor", isCorrect: false },
        ],
      },
      {
        id: 10,
        question: "A smart home incorporates all theadvanced",
        options: [
          { id: "a", text: "trafficsystem", isCorrect: false },
          { id: "b", text: "backupsystem", isCorrect: false },
          { id: "c", text: "ignitionsystem", isCorrect: false },
          { id: "d", text: "automationsystems", isCorrect: true },
        ],
      },
      {
        id: 11,
        question: "Proximity sensor reduces:-",
        options: [
          { id: "a", text: "Pollution", isCorrect: false },
          { id: "b", text: "Temperature", isCorrect: false },
          { id: "c", text: "power consumption", isCorrect: true },
          { id: "d", text: "Resistance", isCorrect: false },
        ],
      },
      {
        id: 12,
        question:
          "------ help to capture signal from the satellite to infer the locationof the device.",
        options: [
          { id: "a", text: "GPS", isCorrect: true },
          { id: "b", text: "Bothc &d", isCorrect: false },
          { id: "c", text: "Bluetooth", isCorrect: false },
          { id: "d", text: "Wi-Fi", isCorrect: false },
        ],
      },
      {
        id: 13,
        question:
          "helps to measure the rate of change of angular movement in all threeaxis",
        options: [
          { id: "a", text: "magneticsensor", isCorrect: false },
          { id: "b", text: "gyroscope", isCorrect: true },
          { id: "c", text: "borometer", isCorrect: false },
          { id: "d", text: "heartrate", isCorrect: false },
        ],
      },
      {
        id: 14,
        question: "The oldest and best-known smart home automation systemis-",
        options: [
          { id: "a", text: "B-10", isCorrect: false },
          { id: "b", text: "C-10", isCorrect: false },
          { id: "c", text: "X-10", isCorrect: true },
          { id: "d", text: "A-10", isCorrect: false },
        ],
      },
      {
        id: 15,
        question: "Smart waste dealswith-------",
        options: [
          { id: "a", text: "Garbage collection and disposal", isCorrect: true },
          { id: "b", text: "Reusing and reducinggarbage", isCorrect: false },
          { id: "c", text: "Recyclingwaste", isCorrect: false },
          { id: "d", text: "Dumping trash inlandfills", isCorrect: false },
        ],
      },
      {
        id: 16,
        question: "Smart bins indicate status of binusing-------------",
        options: [
          { id: "a", text: "Levelsensors", isCorrect: true },
          { id: "b", text: "Temperaturesensors", isCorrect: false },
          { id: "c", text: "Garbagesensors", isCorrect: false },
          { id: "d", text: "Gassensors", isCorrect: false },
        ],
      },
      {
        id: 17,
        question:
          "Domestic waste collection services are often providedby--------------",
        options: [
          { id: "a", text: "Local Governmentauthorities", isCorrect: true },
          { id: "b", text: "State Government authorities", isCorrect: false },
          { id: "c", text: "Central Governmentauthorities", isCorrect: false },
          { id: "d", text: "HousingSociety", isCorrect: false },
        ],
      },
      {
        id: 18,
        question: "Smart bins can be monitoredusing",
        options: [
          {
            id: "a",
            text: "Its own private network implemented bymunicipality",
            isCorrect: true,
          },
          { id: "b", text: "Manual inspection by aperson", isCorrect: false },
          { id: "c", text: "TrainedDogs", isCorrect: false },
          { id: "d", text: "Housingsociety", isCorrect: false },
        ],
      },
      {
        id: 19,
        question:
          "In Video monitoring system, camera will start recording automatically as it senseany movement in range is due to usedof.",
        options: [
          { id: "a", text: "Home theatersystem", isCorrect: false },
          { id: "b", text: "Home security and AlarmSystem.", isCorrect: true },
          {
            id: "c",
            text: "home temperature control system",
            isCorrect: false,
          },
          { id: "d", text: "Home entertainmentsystem", isCorrect: false },
        ],
      },
      {
        id: 20,
        question: "Function of device domain in M2Mnetwork",
        options: [
          {
            id: "a",
            text: "Collection and transmission of sensordata",
            isCorrect: true,
          },
          { id: "b", text: "Interpretation of sensordata", isCorrect: false },
          { id: "c", text: "Processing of sensordata", isCorrect: false },
          { id: "d", text: "Analysis of sensordata", isCorrect: false },
        ],
      },
      {
        id: 21,
        question:
          "Subnet in M2M is used for generating the communication link between the M2M devicesand the M2M---------------",
        options: [
          { id: "a", text: "Gateways", isCorrect: true },
          { id: "b", text: "Devices", isCorrect: false },
          { id: "c", text: "Server", isCorrect: false },
          { id: "d", text: "Router", isCorrect: false },
        ],
      },
      {
        id: 22,
        question:
          "Ina-----------------networks, all nodes communicate with each other using someintermediate gateways .",
        options: [
          { id: "a", text: "Fullydistributed", isCorrect: false },
          { id: "b", text: "Client-server", isCorrect: true },
          { id: "c", text: "Cooperative", isCorrect: false },
          { id: "d", text: "point to pointnetwork", isCorrect: false },
        ],
      },
      {
        id: 23,
        question: "One of this is not asensor",
        options: [
          { id: "a", text: "Gyroscope", isCorrect: false },
          { id: "b", text: "Camera", isCorrect: false },
          { id: "c", text: "Oscillator", isCorrect: true },
          { id: "d", text: "Barometer", isCorrect: false },
        ],
      },
      {
        id: 24,
        question: ")is used for navigationpurpose:",
        options: [
          { id: "a", text: "GPS", isCorrect: true },
          { id: "b", text: "Lightsensor", isCorrect: false },
          { id: "c", text: "Barometer", isCorrect: false },
          { id: "d", text: "Accelerometer", isCorrect: false },
        ],
      },
      {
        id: 25,
        question:
          "Lights in home can be controlled by mobile app by replacing normal switchwith .",
        options: [
          { id: "a", text: "SmartCar", isCorrect: false },
          { id: "b", text: "Smartdustbin", isCorrect: false },
          { id: "c", text: "SmartTV", isCorrect: false },
          { id: "d", text: "SmartSwitches", isCorrect: true },
        ],
      },
      {
        id: 26,
        question: "Frequency band used by Z-WAVE protocolis:",
        options: [
          { id: "a", text: "60Hz", isCorrect: false },
          { id: "b", text: "2.4 GHz", isCorrect: false },
          { id: "c", text: "Sub 1GHz", isCorrect: true },
          { id: "d", text: "5 GHz", isCorrect: false },
        ],
      },
      {
        id: 27,
        question: "Transaction and data integration across multiple sourcesis",
        options: [
          { id: "a", text: "Orchestration", isCorrect: true },
          { id: "b", text: "DataRouting", isCorrect: false },
          { id: "c", text: "Data Mining", isCorrect: false },
          { id: "d", text: "Dataanalyzing", isCorrect: false },
        ],
      },
      {
        id: 28,
        question:
          "In aApplicationserver---------------allows users to access and use data even though device isnot connected.",
        options: [
          { id: "a", text: "Off linesupport", isCorrect: true },
          { id: "b", text: "Unsecureddata", isCorrect: false },
          { id: "c", text: "Data routing", isCorrect: false },
          { id: "d", text: "Orchestration", isCorrect: false },
        ],
      },
      {
        id: 29,
        question:
          "Data encryption, device control, SSL, call logging is doneby-------",
        options: [
          { id: "a", text: "Orchestration", isCorrect: false },
          { id: "b", text: "Datarouting", isCorrect: false },
          { id: "c", text: "Both a &b", isCorrect: false },
          { id: "d", text: "Security", isCorrect: true },
        ],
      },
      {
        id: 30,
        question:
          "Working in unlicensed frequency band is thelimitation of----------------cellularcommunication technology.",
        options: [
          { id: "a", text: "Cellular eMTC", isCorrect: false },
          { id: "b", text: "LoRa", isCorrect: true },
          { id: "c", text: "CellularNB-IoT", isCorrect: false },
          { id: "d", text: "Ethernet", isCorrect: false },
        ],
      },
      {
        id: 31,
        question:
          "Wireless range for indoor applications using ZigBee protocolis-------",
        options: [
          { id: "a", text: "upto 10meters", isCorrect: true },
          { id: "b", text: "Upto 70meters", isCorrect: false },
          { id: "c", text: "Upto 10 Kilometers", isCorrect: false },
          { id: "d", text: "Upto 500meters", isCorrect: false },
        ],
      },
      {
        id: 32,
        question:
          "Web-based applications for controlling home appliances in smart home are also knownas .",
        options: [
          { id: "a", text: "Web games", isCorrect: false },
          { id: "b", text: "Webgraphics", isCorrect: false },
          { id: "c", text: "Web apps", isCorrect: true },
          { id: "d", text: "Web media", isCorrect: false },
        ],
      },
      {
        id: 33,
        question:
          "Identify the wire line technology which has absence of regulations on use of frequencybands.",
        options: [
          { id: "a", text: "PLC", isCorrect: false },
          { id: "b", text: "Ethernet", isCorrect: true },
          { id: "c", text: "Wi-Fi", isCorrect: false },
          { id: "d", text: "ZigBee", isCorrect: false },
        ],
      },
      {
        id: 34,
        question: "Identify Wire LineTechnology.",
        options: [
          { id: "a", text: "DSL", isCorrect: true },
          { id: "b", text: "Wi-Fi", isCorrect: false },
          { id: "c", text: "ZigBee", isCorrect: false },
          { id: "d", text: "Z-Wave", isCorrect: false },
        ],
      },
      {
        id: 35,
        question: "Identify the wireless cellulartechnology",
        options: [
          { id: "a", text: "Bluetooth", isCorrect: false },
          { id: "b", text: "GSM", isCorrect: true },
          { id: "c", text: "ZigBee", isCorrect: false },
          { id: "d", text: "Wi-Fi", isCorrect: false },
        ],
      },
      {
        id: 36,
        question: "Identify Non cellular wirelesstechnology",
        options: [
          { id: "a", text: "Wi-Fi", isCorrect: true },
          { id: "b", text: "NB-IoT", isCorrect: false },
          { id: "c", text: "GSM", isCorrect: false },
          { id: "d", text: "WCDMA", isCorrect: false },
        ],
      },
      {
        id: 37,
        question: "In wired communication technology PLC standsfor---------",
        options: [
          { id: "a", text: "Phase Locked Control", isCorrect: false },
          { id: "b", text: "Phase Loop Communication", isCorrect: false },
          { id: "c", text: "Pulse LineControl", isCorrect: false },
          { id: "d", text: "Power Linecommunication", isCorrect: true },
        ],
      },
      {
        id: 38,
        question:
          "-------------- is a network component, used to convert the physical parameter into a signal which can be measured electrically.",
        options: [
          { id: "a", text: "Gateway", isCorrect: false },
          { id: "b", text: "Sensor", isCorrect: true },
          { id: "c", text: "Server", isCorrect: false },
          { id: "d", text: "ApplicationServer", isCorrect: false },
        ],
      },
      {
        id: 39,
        question:
          "M2M technologies allow wired or wireless system to communicate with devices of-------------- ability.",
        options: [
          { id: "a", text: "Same", isCorrect: false },
          { id: "b", text: "CompletelyDifferent", isCorrect: true },
          { id: "c", text: "Partiallydifferent", isCorrect: false },
          { id: "d", text: "ExactlyOpposite", isCorrect: false },
        ],
      },
      {
        id: 40,
        question:
          "In M2M communication, the intelligent Sensors communicate with the communicationnetwork with the help of----------------",
        options: [
          { id: "a", text: "M2MGateways", isCorrect: true },
          { id: "b", text: "M2M Applicationdomain", isCorrect: false },
          { id: "c", text: "M2Mtrigger", isCorrect: false },
          { id: "d", text: "M2Mserver", isCorrect: false },
        ],
      },
      {
        id: 41,
        question:
          "Green pollution control and climate change adaption comesunder----",
        options: [
          { id: "a", text: "Smart Infrastructure", isCorrect: false },
          { id: "b", text: "Smart Mobility", isCorrect: false },
          { id: "c", text: "SmartEnvironment", isCorrect: true },
          { id: "d", text: "SmartEducation", isCorrect: false },
        ],
      },
      {
        id: 42,
        question:
          "X-10 home automation sysytem can control switchingupto                              appliances on and off with no need for any extracables.",
        options: [
          { id: "a", text: "256", isCorrect: true },
          { id: "b", text: "512", isCorrect: false },
          { id: "c", text: "64", isCorrect: false },
          { id: "d", text: "128", isCorrect: false },
        ],
      },
      {
        id: 43,
        question:
          "Energy efficiency, reduced emissions and smart meters are the featuresof-----",
        options: [
          { id: "a", text: "SmartEducation", isCorrect: false },
          { id: "b", text: "SmartGovernment", isCorrect: false },
          { id: "c", text: "SmartBusiness", isCorrect: false },
          { id: "d", text: "Smart Utility", isCorrect: true },
        ],
      },
      {
        id: 44,
        question:
          "Integrated ICT, Sustainability and smart economy are the featuresof------",
        options: [
          { id: "a", text: "Smart Utility", isCorrect: false },
          { id: "b", text: "Smartinfrastructure", isCorrect: true },
          { id: "c", text: "SmartBusiness", isCorrect: false },
          { id: "d", text: "SmartEnvironment", isCorrect: false },
        ],
      },
      {
        id: 45,
        question:
          "Efficient use of physical infrastructure to support strong and healthy economic, social,& cultural development is achievedthrough------",
        options: [
          {
            id: "a",
            text: "Artificial Intelligence & Dataanalytics",
            isCorrect: true,
          },
          { id: "b", text: "SmartHome", isCorrect: false },
          { id: "c", text: "GSMmodule", isCorrect: false },
          { id: "d", text: "Web controlling", isCorrect: false },
        ],
      },
      {
        id: 46,
        question:
          "Identify the sensor used to determine the distance to an object using transmittingsignal generated by high frequency sound waves and receivedecho.",
        options: [
          { id: "a", text: "Gyroscope", isCorrect: false },
          { id: "b", text: "Audiosensor", isCorrect: false },
          { id: "c", text: "Ultrasonicsensor", isCorrect: true },
          { id: "d", text: "Magneticsensor", isCorrect: false },
        ],
      },
      {
        id: 47,
        question:
          "Health & Education, Adequate water supply, E-Governance, safety & security forsenior citizens & banks are the features or requirements of------",
        options: [
          { id: "a", text: "SmartHome", isCorrect: false },
          { id: "b", text: "Smart City", isCorrect: true },
          { id: "c", text: "Smart illuminationsystem", isCorrect: false },
          { id: "d", text: "HVACmodel", isCorrect: false },
        ],
      },
      {
        id: 48,
        question:
          "Sensor owners can register & connect devices to feed data for storage & allow developersto build own application based on that data is allowedthrough-------",
        options: [
          { id: "a", text: "Planning andBudget", isCorrect: false },
          { id: "b", text: "GSM module", isCorrect: false },
          { id: "c", text: "Go Greenconcept", isCorrect: false },
          { id: "d", text: "On-Line Databaseservices", isCorrect: true },
        ],
      },
      {
        id: 49,
        question: "Smart home devices can not control through",
        options: [
          { id: "a", text: "wifi", isCorrect: false },
          { id: "b", text: "Bluetooth", isCorrect: false },
          { id: "c", text: "IEEE488-bus", isCorrect: true },
          { id: "d", text: "Zigbee", isCorrect: false },
        ],
      },
      {
        id: 50,
        question:
          "Identify the communication technology which is not used in fitness and healthcaredevices.",
        options: [
          { id: "a", text: "BluetoothLow Energy", isCorrect: false },
          { id: "b", text: "NFC", isCorrect: false },
          { id: "c", text: "Z-WAVE", isCorrect: true },
          { id: "d", text: "ANT", isCorrect: false },
        ],
      },
      {
        id: 51,
        question:
          "Ina-----------------networks, all nodes or devices communicate directly with theserver.",
        options: [
          { id: "a", text: "Fullydistributed", isCorrect: false },
          { id: "b", text: "Client-server", isCorrect: true },
          { id: "c", text: "Cooperative", isCorrect: false },
          { id: "d", text: "point to pointnetwork", isCorrect: false },
        ],
      },
      {
        id: 52,
        question:
          "The combination of fixed , mobile & voluntary sensors used for data collection and fusionis donein------------",
        options: [
          { id: "a", text: "Smart citymodel", isCorrect: true },
          { id: "b", text: "Distancesensing", isCorrect: false },
          { id: "c", text: "Webcontrolling", isCorrect: false },
          { id: "d", text: "LEDdisplays", isCorrect: false },
        ],
      },
      {
        id: 53,
        question:
          "Smarthealthcareincludes-------------------for data & informationcollection.",
        options: [
          { id: "a", text: "E health & Mhealth", isCorrect: true },
          { id: "b", text: "E health & Ahealth", isCorrect: false },
          { id: "c", text: "Z health & Mhealth", isCorrect: false },
          { id: "d", text: "M health & Xhealth", isCorrect: false },
        ],
      },
      {
        id: 54,
        question: "is not smart light manufacturingcompany.",
        options: [
          { id: "a", text: "Osram", isCorrect: false },
          { id: "b", text: "IKEA", isCorrect: false },
          { id: "c", text: "Phillips", isCorrect: false },
          { id: "d", text: "Maruti-suzuki", isCorrect: true },
        ],
      },
      {
        id: 55,
        question: "State the need of Smartcity.",
        options: [
          { id: "a", text: "IncreasedPopulation", isCorrect: true },
          { id: "b", text: "Financialsupport", isCorrect: false },
          { id: "c", text: "Unemployment", isCorrect: false },
          { id: "d", text: "Wild life", isCorrect: false },
        ],
      },
      {
        id: 56,
        question:
          "In smart waste management, sensor based dustbin will judge the level of waste in it andsend the message directlyto-----------",
        options: [
          { id: "a", text: "central government", isCorrect: false },
          { id: "b", text: "State Government", isCorrect: false },
          { id: "c", text: "Municipalcorporation", isCorrect: true },
          { id: "d", text: "sweeper", isCorrect: false },
        ],
      },
      {
        id: 57,
        question:
          "If all M2M devices are connected as peers to the network and one of the node whichis connected to network acts as router then that type of network is calledas-------------------",
        options: [
          { id: "a", text: "Client servernetwork", isCorrect: false },
          { id: "b", text: "Point to pointnetwork", isCorrect: false },
          { id: "c", text: "Cooperativenetwork", isCorrect: true },
          { id: "d", text: "Fully distributednetwork", isCorrect: false },
        ],
      },
      {
        id: 58,
        question:
          "Low Mobility, Time controlled, Low power consumption & monitoring, Online smalldata transmission are the features of---------------",
        options: [
          { id: "a", text: "M2M communicationsystem", isCorrect: true },
          { id: "b", text: "Ultrasonicsensor", isCorrect: false },
          { id: "c", text: "GSMModule", isCorrect: false },
          { id: "d", text: "Smartbins", isCorrect: false },
        ],
      },
      {
        id: 59,
        question:
          "In smart Education Smart Board, Video conference, AI platform are the examples of-------------.",
        options: [
          { id: "a", text: "Softwaredevelopment", isCorrect: false },
          { id: "b", text: "Interactive displayhardware", isCorrect: true },
          { id: "c", text: "M2MGateways", isCorrect: false },
          { id: "d", text: "Smartsensors", isCorrect: false },
        ],
      },
      {
        id: 60,
        question:
          "                                                          for controlling home appliances in smart home implements the flexibility of theInternet",
        options: [
          { id: "a", text: "Web-basedapplications", isCorrect: true },
          { id: "b", text: "Relays", isCorrect: false },
          { id: "c", text: "Sensors", isCorrect: false },
          { id: "d", text: "Mechanicalswitches", isCorrect: false },
        ],
      },
      {
        id: 61,
        question:
          "In M2M/IoT communication , devices will communicate with application server through-------.",
        options: [
          { id: "a", text: "Switch", isCorrect: false },
          { id: "b", text: "Hub", isCorrect: false },
          { id: "c", text: "Router", isCorrect: false },
          { id: "d", text: "Gateways &Platform", isCorrect: true },
        ],
      },
      {
        id: 62,
        question: "Identify from following is not a example ofSubnet.",
        options: [
          { id: "a", text: "SmartBoard", isCorrect: true },
          { id: "b", text: "PLC", isCorrect: false },
          { id: "c", text: "Meterbus(M-BUS)", isCorrect: false },
          { id: "d", text: "ZigBee", isCorrect: false },
        ],
      },
      {
        id: 63,
        question:
          "In M2M/IoT communication use of Gateway to communicate with platform dependson----------",
        options: [
          { id: "a", text: "Cost ofcommunication", isCorrect: false },
          {
            id: "b",
            text: "Range of communicationtechnology",
            isCorrect: true,
          },
          { id: "c", text: "Power ofdevice", isCorrect: false },
          { id: "d", text: "Applicationserver", isCorrect: false },
        ],
      },
      {
        id: 64,
        question:
          "For the connection of Arduino board with Ultrasonic sensor , Pin number 11 & 12 onArduino board are used forconnecting---------",
        options: [
          {
            id: "a",
            text: "Echo & Trigger pin of ultrasonicsensor",
            isCorrect: true,
          },
          { id: "b", text: "VCC & GND of ultrasonicsensor", isCorrect: false },
          { id: "c", text: "to the GSMmodule", isCorrect: false },
          { id: "d", text: "to theobject", isCorrect: false },
        ],
      },
      {
        id: 65,
        question:
          "Identify which is not a type of garbage container ordustbin.",
        options: [
          { id: "a", text: "trashcans", isCorrect: false },
          { id: "b", text: "dumpsters", isCorrect: false },
          { id: "c", text: "wheeliebins", isCorrect: false },
          { id: "d", text: "Glass bins", isCorrect: true },
        ],
      },
      {
        id: 66,
        question: "In intelligent traffic management GDP standsfor-----------",
        options: [
          { id: "a", text: "Generic DocumentaryProduct", isCorrect: false },
          { id: "b", text: "Gross DomesticProduct", isCorrect: true },
          { id: "c", text: "General DevelopmentProject", isCorrect: false },
          { id: "d", text: "Government Developed Project", isCorrect: false },
        ],
      },
      {
        id: 67,
        question:
          "Making mobility more efficient and convenient by solving the problems associatedwith urban density is the aim of---------------",
        options: [
          { id: "a", text: "M2M areanetwork", isCorrect: false },
          { id: "b", text: "Smartbudget", isCorrect: false },
          { id: "c", text: "Interactivemanagement", isCorrect: false },
          { id: "d", text: "MaaS", isCorrect: true },
        ],
      },
      {
        id: 68,
        question: "State the need of Smarttransportation.",
        options: [
          { id: "a", text: "High Economyrate", isCorrect: false },
          { id: "b", text: "Literacyrate", isCorrect: false },
          { id: "c", text: "PopulationGrowth", isCorrect: true },
          { id: "d", text: "Naturalcalamities", isCorrect: false },
        ],
      },
      {
        id: 69,
        question: "Fire monitoring is done through------------",
        options: [
          {
            id: "a",
            text: "Photoelectric smoke detectors & heatdetectors",
            isCorrect: true,
          },
          { id: "b", text: "Carbon Monoxidedetectors", isCorrect: false },
          { id: "c", text: "Proximitysensors", isCorrect: false },
          { id: "d", text: "Ultrasonicsensors", isCorrect: false },
        ],
      },
      {
        id: 70,
        question:
          "For smart safety & security Indoor laundry room shouldhave-------",
        options: [
          { id: "a", text: "Poisoning gasdetector", isCorrect: false },
          { id: "b", text: "smokedetector", isCorrect: false },
          { id: "c", text: "Ultrasonicsensor", isCorrect: false },
          { id: "d", text: "flood sensor & heatdetector", isCorrect: true },
        ],
      },
      {
        id: 71,
        question: "One of this is not a networkingdevice:",
        options: [
          { id: "a", text: "Router", isCorrect: false },
          { id: "b", text: "Switch", isCorrect: false },
          { id: "c", text: "Bridge", isCorrect: false },
          { id: "d", text: "TrafficAnalyzer", isCorrect: true },
        ],
      },
      {
        id: 72,
        question: "Limitation of Wireless sensorNetwork(WSN)",
        options: [
          { id: "a", text: "RestrictedBandwidth", isCorrect: true },
          { id: "b", text: "Infinite storage capacity", isCorrect: false },
          { id: "c", text: "High processingspeed", isCorrect: false },
          { id: "d", text: "Large range", isCorrect: false },
        ],
      },
      {
        id: 73,
        question:
          "The vital component often considered in discourse around smart citiesis---",
        options: [
          { id: "a", text: "The role of theaccountant", isCorrect: false },
          { id: "b", text: "The role of centralGovernment", isCorrect: false },
          { id: "c", text: "The role of localGovernment", isCorrect: false },
          { id: "d", text: "The role ofTechnology", isCorrect: true },
        ],
      },
      {
        id: 74,
        question: "Advantage of wireless technology over wired technologyis:",
        options: [
          { id: "a", text: "HighInterference", isCorrect: false },
          { id: "b", text: "Signalattenuation", isCorrect: false },
          { id: "c", text: "Less expensive todeploy", isCorrect: true },
          { id: "d", text: "lessreliable", isCorrect: false },
        ],
      },
      {
        id: 75,
        question:
          "Disadvantage of Wired communication over wireless communicationis:",
        options: [
          { id: "a", text: "Less prone tointerference", isCorrect: false },
          { id: "b", text: "Morereliable", isCorrect: false },
          { id: "c", text: "Lowcost", isCorrect: false },
          { id: "d", text: "Expensive to deploy", isCorrect: true },
        ],
      },
      {
        id: 76,
        question:
          "Type of communication technology used for any application not dependsupon:",
        options: [
          { id: "a", text: "light intensity", isCorrect: true },
          { id: "b", text: "Coveragedistance", isCorrect: false },
          { id: "c", text: "Power", isCorrect: false },
          { id: "d", text: "Quality ofService", isCorrect: false },
        ],
      },
      {
        id: 77,
        question: "To fix orientation ofdevicedisplay--------------is used.",
        options: [
          { id: "a", text: "proximitysensor", isCorrect: false },
          { id: "b", text: "magneticsensor", isCorrect: true },
          { id: "c", text: "ultrasonicsensor", isCorrect: false },
          { id: "d", text: "Barometer", isCorrect: false },
        ],
      },
      {
        id: 78,
        question: "Advantage of smart waste managementis:",
        options: [
          { id: "a", text: "Decreased noise & airpollution", isCorrect: true },
          { id: "b", text: "More fuelconsumption", isCorrect: false },
          { id: "c", text: "More traffic onroads", isCorrect: false },
          { id: "d", text: "Increased level ofCO2", isCorrect: false },
        ],
      },
      {
        id: 79,
        question: "One of the statements is not true for smarteducation.",
        options: [
          { id: "a", text: "Easy access to onlineresources", isCorrect: false },
          { id: "b", text: "Increasedproductivity", isCorrect: false },
          {
            id: "c",
            text: "Enhanced & interactive learningexperience",
            isCorrect: false,
          },
          { id: "d", text: "Increased trafficflow", isCorrect: true },
        ],
      },
      {
        id: 80,
        question:
          "                                                                                      provides thermal comfort and acceptable air quality insidehome.",
        options: [
          {
            id: "a",
            text: "Heating, ventilation, and air conditioning(HVAC)",
            isCorrect: true,
          },
          { id: "b", text: "Video monitoringsystem", isCorrect: false },
          { id: "c", text: "Smart waste managementsystem.", isCorrect: false },
          { id: "d", text: "Smart lightingsystem", isCorrect: false },
        ],
      },
      {
        id: 81,
        question: "M2M network architecture notincludes:",
        options: [
          { id: "a", text: "M2M  areadomain", isCorrect: false },
          { id: "b", text: "applicationdomain", isCorrect: false },
          { id: "c", text: "E-Governance", isCorrect: true },
          { id: "d", text: "Networkdomain", isCorrect: false },
        ],
      },
      {
        id: 82,
        question: "Smart city does notinclude:",
        options: [
          { id: "a", text: "SmartTransportation", isCorrect: false },
          { id: "b", text: "Smarteducation", isCorrect: false },
          { id: "c", text: "SmartBehavior", isCorrect: true },
          { id: "d", text: "Smart WasteManagement", isCorrect: false },
        ],
      },
      {
        id: 83,
        question:
          "Smarthealthcareapplies--------------to analyze & manage collected health datafor accurate treatment.",
        options: [
          { id: "a", text: "IntelligentTransportation", isCorrect: false },
          {
            id: "b",
            text: "Artificial Intelligence & automation",
            isCorrect: true,
          },
          { id: "c", text: "Crypto currency", isCorrect: false },
          { id: "d", text: "Cochlearimplants", isCorrect: false },
        ],
      },
      {
        id: 84,
        question: "The key components of Smart Transportationare:",
        options: [
          {
            id: "a",
            text: "Radiologist, Physician &Researcher",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Smart infrastructure, Data integration & smartservices",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Ultrasonic sensor, Smart bins & municipalauthorities",
            isCorrect: false,
          },
          {
            id: "d",
            text: "AI platform, Video conference & Interactivedisplay",
            isCorrect: false,
          },
        ],
      },
      {
        id: 85,
        question:
          "Pollution reduction, disposal of unused & recycling of useful materials & creationof green energy is doneby------",
        options: [
          { id: "a", text: "HVACmanagement", isCorrect: false },
          { id: "b", text: "Smarthealthcare", isCorrect: false },
          { id: "c", text: "SmartHome", isCorrect: false },
          { id: "d", text: "Smart wastemanagement", isCorrect: true },
        ],
      },
      {
        id: 86,
        question:
          "Extremely short range is thelimitationof-------------communicationtechnology.",
        options: [
          { id: "a", text: "NFC", isCorrect: true },
          { id: "b", text: "LoRa", isCorrect: false },
          { id: "c", text: "Wi-SUN", isCorrect: false },
          { id: "d", text: "SIGFOX", isCorrect: false },
        ],
      },
      {
        id: 87,
        question:
          '"Hey Google, turn on all lights.". This voice commandisfor                                 used in smart home.',
        options: [
          { id: "a", text: "Camera", isCorrect: false },
          { id: "b", text: "Speaker", isCorrect: false },
          { id: "c", text: "Microphone", isCorrect: true },
          { id: "d", text: "Picturetube.", isCorrect: false },
        ],
      },
      {
        id: 88,
        question:
          "Medium range communication up to 10 Km is achievedthrough------",
        options: [
          { id: "a", text: "WPAN", isCorrect: false },
          { id: "b", text: "WNAN", isCorrect: true },
          { id: "c", text: "NFC", isCorrect: false },
          { id: "d", text: "RFID", isCorrect: false },
        ],
      },
      {
        id: 89,
        question: "One of following is asensor:",
        options: [
          { id: "a", text: "Meterbus", isCorrect: false },
          { id: "b", text: "ZigBee", isCorrect: false },
          { id: "c", text: "GSMmodule", isCorrect: false },
          { id: "d", text: "Camera", isCorrect: true },
        ],
      },
      {
        id: 90,
        question:
          "One of the following smart home devices is not avilable inmarket",
        options: [
          { id: "a", text: "video doorbell", isCorrect: false },
          { id: "b", text: "smart doorlocks", isCorrect: false },
          { id: "c", text: "smart burger", isCorrect: true },
          { id: "d", text: "SmartTV", isCorrect: false },
        ],
      },
      {
        id: 91,
        question:
          "GDPincreaseswith------------------consumption of vehicular fuel & oilimports.",
        options: [
          { id: "a", text: "increasein", isCorrect: false },
          { id: "b", text: "decreasein", isCorrect: true },
          { id: "c", text: "more investmentsin", isCorrect: false },
          { id: "d", text: "interactive", isCorrect: false },
        ],
      },
      {
        id: 92,
        question: "One of these statements is not true for smartcity.",
        options: [
          { id: "a", text: "Sustainableenvironment", isCorrect: false },
          {
            id: "b",
            text: "Robust IT connectivity &digitization",
            isCorrect: false,
          },
          { id: "c", text: "safety & security ofcitizens", isCorrect: false },
          { id: "d", text: "vehicle exhaustemissions", isCorrect: true },
        ],
      },
      {
        id: 93,
        question:
          ")is a software framework that provides facilities to createweb applications & server environment to run them.",
        options: [
          { id: "a", text: "ApplicationServer", isCorrect: true },
          { id: "b", text: "Sensor n/w", isCorrect: false },
          { id: "c", text: "Accessprotocol", isCorrect: false },
          { id: "d", text: "Gateway", isCorrect: false },
        ],
      },
      {
        id: 94,
        question:
          "Efficient urban mobility along with public transport and board highways are thefeatures of:",
        options: [
          { id: "a", text: "Smart home", isCorrect: false },
          { id: "b", text: "Smartmetering", isCorrect: false },
          { id: "c", text: "Smarttransportation", isCorrect: true },
          { id: "d", text: "Smart security", isCorrect: false },
        ],
      },
      {
        id: 95,
        question:
          "Inan                                     system heat can be removed through radiation andconduction.",
        options: [
          { id: "a", text: "room heating", isCorrect: false },
          { id: "b", text: "airconditioning", isCorrect: true },
          { id: "c", text: "dish cleaning", isCorrect: false },
          { id: "d", text: "cloths washing", isCorrect: false },
        ],
      },
      {
        id: 96,
        question: "Pressure of the device peripheral is measuredusing:",
        options: [
          { id: "a", text: "Gyroscope", isCorrect: false },
          { id: "b", text: "Barometer", isCorrect: true },
          { id: "c", text: "Magneticsensor", isCorrect: false },
          { id: "d", text: "Accelerometer", isCorrect: false },
        ],
      },
      {
        id: 97,
        question:
          "Brightness and contrast of the display of the device is adjustedusing:",
        options: [
          { id: "a", text: "Lightsensor", isCorrect: true },
          { id: "b", text: "Proximitysensor", isCorrect: false },
          { id: "c", text: "Gyroscope", isCorrect: false },
          { id: "d", text: "GPS", isCorrect: false },
        ],
      },
      {
        id: 98,
        question:
          "The presence of nearby objects without any physical contact is detectedusing:",
        options: [
          { id: "a", text: "Audiosensor", isCorrect: false },
          { id: "b", text: "Position sensor", isCorrect: false },
          { id: "c", text: "Proximitysensor", isCorrect: true },
          { id: "d", text: "Motion sensor", isCorrect: false },
        ],
      },
      {
        id: 99,
        question:
          "High data security is theadvantageof---------------communicationtechnology.",
        options: [
          { id: "a", text: "DSL", isCorrect: false },
          { id: "b", text: "Ethernet", isCorrect: true },
          { id: "c", text: "NFC", isCorrect: false },
          { id: "d", text: "LoRa", isCorrect: false },
        ],
      },
      {
        id: 100,
        question: "Name wireless device used to control X-10system",
        options: [
          { id: "a", text: "Air condinionar", isCorrect: false },
          { id: "b", text: "Wireless router", isCorrect: true },
          { id: "c", text: "TV", isCorrect: false },
          { id: "d", text: "Lighting", isCorrect: false },
        ],
      },
    ],
  },
];
