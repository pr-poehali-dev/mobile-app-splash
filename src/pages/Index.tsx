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
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl">
        <div className="container flex h-20 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-md"></div>
              <img 
                src="https://cdn.poehali.dev/projects/ca50f167-a69a-4d79-9690-bc5c0f5db47f/files/6a340099-c705-449e-9c02-7c1ee4903420.jpg" 
                alt="Tennis Ball" 
                className="relative h-12 w-12 rounded-full transition-transform group-hover:scale-110 group-hover:rotate-12"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">
                Padel Club
              </h1>
              <p className="text-xs md:text-sm font-semibold text-white/70 tracking-wider">
                ЗВИ
              </p>
            </div>
          </Link>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative w-12 h-12 hover:bg-primary/10"
              >
                <div className="flex flex-col gap-1.5 w-6">
                  <span className={`h-0.5 w-full bg-primary transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`h-0.5 w-full bg-primary transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-0.5 w-full bg-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="top" 
              className="h-auto max-h-[85vh] bg-black/70 backdrop-blur-2xl border-b border-primary/30 flex flex-col rounded-b-2xl"
            >
              <SheetHeader className="text-center pt-4 pb-3">
                <SheetTitle className="text-3xl font-bold text-white">
                  Меню
                </SheetTitle>
              </SheetHeader>
              
              <nav className="mt-3 space-y-2 flex-1 overflow-y-auto pb-3 px-4">
                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/20 transition-all border border-white/10 hover:border-primary/50"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/30 flex items-center justify-center group-hover:bg-primary/50 transition-all">
                      <Icon name={item.icon as any} className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-white group-hover:text-primary transition-colors">
                        {item.title}
                      </p>
                      <p className="text-sm text-white/70">
                        {item.description}
                      </p>
                    </div>
                    <Icon name="ChevronRight" className="h-6 w-6 text-white/60 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </nav>
              
              <div className="p-5 border-t border-primary/30">
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 text-lg"
                  size="lg"
                >
                  <Link to="/courts" onClick={() => setIsMenuOpen(false)}>
                    <Icon name="Calendar" className="mr-2 h-6 w-6" />
                    Забронировать корт
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/ca50f167-a69a-4d79-9690-bc5c0f5db47f/files/80fabcb2-99ed-476f-9922-724d00190921.jpg"
            alt="Padel Court"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center animate-fade-in max-w-5xl">
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 text-lg px-12 py-6 shadow-2xl animate-fade-in mb-12"
            >
              <Link to="/courts">
                <Icon name="Calendar" className="mr-3 h-6 w-6" />
                Забронировать корт
              </Link>
            </Button>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-6">
              {menuItems.map((item, idx) => (
                <Card 
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Link to={item.link}>
                    <CardHeader className="text-center p-3">
                      <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon name={item.icon as any} className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-base md:text-lg mb-0.5">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-white/80 text-xs">
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

      <section className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Начните играть прямо сейчас</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Забронируйте корт или узнайте больше о наших услугах
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Link to="/courts">
                    <Icon name="Calendar" className="mr-2 h-5 w-5" />
                    Забронировать корт
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/contacts">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    Связаться с нами
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="CircleDot" className="h-6 w-6 text-primary" />
              <span className="font-bold">Padel club Завода имени Ильича</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;