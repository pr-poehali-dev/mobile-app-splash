import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { icon: 'Target', title: 'Корты', description: 'Профессиональные корты', link: '/courts' },
    { icon: 'Trophy', title: 'Турниры', description: 'Соревнования для всех', link: '/tournaments' },
    { icon: 'BarChart3', title: 'Рейтинги', description: 'Топ игроков клуба', link: '/ratings' },
    { icon: 'Briefcase', title: 'Услуги', description: 'Всё для вашей игры', link: '/services' },
    { icon: 'Info', title: 'О клубе', description: 'Наша история', link: '/about' },
    { icon: 'Mail', title: 'Контакты', description: 'Свяжитесь с нами', link: '/contacts' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-primary/30 bg-black/90 backdrop-blur-xl shadow-2xl shadow-primary/20">
        <div className="container flex h-24 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/files/98270635-cd16-4e7d-873f-83c204ef2347.png" 
                alt="Tennis Ball" 
                className="relative h-16 w-16 transition-transform group-hover:scale-110 group-hover:rotate-12"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-wide uppercase text-primary drop-shadow-lg">
                Padel Club
              </h1>
              <p className="text-sm md:text-base font-bold text-secondary tracking-widest">
                ЗВИ
              </p>
            </div>
          </Link>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative w-14 h-14 hover:bg-primary/20 border-2 border-primary/40 rounded-lg"
              >
                <div className="flex flex-col gap-2 w-7">
                  <span className={`h-1 w-full bg-primary rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`} />
                  <span className={`h-1 w-full bg-primary rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-1 w-full bg-primary rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`} />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="top" 
              className="h-auto max-h-[85vh] bg-black/95 backdrop-blur-xl border-b-4 border-primary/50 flex flex-col rounded-b-3xl shadow-2xl shadow-primary/20"
            >
              <SheetHeader className="text-center pt-6 pb-4 border-b border-primary/20">
                <SheetTitle className="text-4xl font-black uppercase text-primary tracking-wider">
                  Меню
                </SheetTitle>
              </SheetHeader>
              
              <nav className="mt-4 space-y-3 flex-1 overflow-y-auto pb-4 px-6">
                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-5 p-5 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all border-2 border-primary/20 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/30"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-all shadow-lg">
                      <Icon name={item.icon as any} className="h-8 w-8 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-black text-xl text-primary group-hover:text-primary transition-colors uppercase tracking-wide">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.description}
                      </p>
                    </div>
                    <Icon name="ChevronRight" className="h-7 w-7 text-primary/60 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                  </Link>
                ))}
              </nav>
              
              <div className="p-6 border-t-2 border-primary/30 bg-black/50">
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 text-black font-black text-xl py-7 rounded-xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 transition-all uppercase tracking-wide"
                  size="lg"
                >
                  <Link to="/courts" onClick={() => setIsMenuOpen(false)}>
                    <Icon name="Calendar" className="mr-3 h-7 w-7" />
                    Забронировать корт
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="relative h-[90vh] min-h-[700px] overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/ca50f167-a69a-4d79-9690-bc5c0f5db47f/files/23d9bd5a-0d56-4a86-b462-21da1ca8679f.jpg"
            alt="Padel Court"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/70 to-black/90" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center animate-fade-in max-w-6xl w-full">
            <div className="mb-16">
              <h2 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-wider">
                <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent drop-shadow-2xl">
                  Padel Club
                </span>
              </h2>
              <p className="text-2xl md:text-3xl text-secondary font-bold tracking-wide mb-12">
                Современный клуб для настоящих чемпионов
              </p>
            </div>
            
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-black text-xl px-16 py-8 shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-110 uppercase tracking-wider rounded-2xl mb-16"
            >
              <Link to="/courts">
                <Icon name="Calendar" className="mr-3 h-8 w-8" />
                Забронировать корт
              </Link>
            </Button>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {menuItems.map((item, idx) => (
                <Card 
                  key={idx}
                  className="bg-secondary/40 backdrop-blur-xl border-2 border-primary/30 hover:border-primary hover:bg-secondary/60 transition-all hover:scale-105 cursor-pointer animate-scale-in shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Link to={item.link}>
                    <CardHeader className="text-center p-5">
                      <div className="mx-auto mb-3 w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary/40">
                        <Icon name={item.icon as any} className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-primary text-lg md:text-xl mb-1 font-black uppercase tracking-wide">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container px-6 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-secondary/50 to-secondary/30 border-4 border-primary/40 shadow-2xl shadow-primary/30 rounded-3xl">
            <CardContent className="p-10 md:p-16 text-center">
              <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-wide text-primary">
                Начните играть прямо сейчас
              </h3>
              <p className="text-xl text-foreground mb-10">
                Забронируйте корт или узнайте больше о наших услугах
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black font-black text-xl px-12 py-7 uppercase tracking-wide rounded-xl shadow-xl shadow-primary/40">
                  <Link to="/courts">
                    <Icon name="Calendar" className="mr-3 h-7 w-7" />
                    Забронировать корт
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-xl px-12 py-7 font-bold border-4 border-primary text-primary hover:bg-primary hover:text-black uppercase tracking-wide rounded-xl">
                  <Link to="/contacts">
                    <Icon name="Phone" className="mr-3 h-7 w-7" />
                    Связаться с нами
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t-4 border-primary/40 bg-black py-12">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/98270635-cd16-4e7d-873f-83c204ef2347.png" 
                alt="Logo" 
                className="h-10 w-10"
              />
              <span className="font-black text-xl text-primary uppercase tracking-wide">Padel club ЗВИ</span>
            </div>
            <p className="text-lg text-secondary font-bold">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;